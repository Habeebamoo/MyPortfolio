// app/api/now-playing/route.ts
import { NextResponse } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to refresh Spotify access token");
  }

  return response.json() as Promise<{ access_token: string }>;
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    // 204 = nothing currently playing
    if (res.status === 204 || res.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await res.json();

    if (!song?.item) {
      return NextResponse.json({ isPlaying: false });
    }

    const artists = song.item.artists
      .map((a: { name: string }) => a.name)
      .join(", ");

    return NextResponse.json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: artists,
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
      progressMs: song.progress_ms,
      durationMs: song.item.duration_ms,
    });
  } catch (err) {
    return NextResponse.json({ isPlaying: false, error: true });
  }
}