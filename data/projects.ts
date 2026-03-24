import { Project } from "@/types/project";

export const projects: Project[] = [
   {
    slug: "clivo",
    name: "Clivo",
    description: "Article Writting Platform",
    stack: ["React.js", "TypeScript", "Golang", "PostgreSQL"],
    about: "Clivo is a platform for sharing and discovering simple stories. It provides an online space for article writers and readers all in one friendly social app.",
    url: "https://myclivo.com",
    repo: "https://github.com/Habeebamoo",
    images: ["/clivo1.png", "/clivo2.png", "/clivo3.png", "/clivo4.png"],
    location: "/project/clivo",
    createdAt: "2025-09-20",
    updatedAt: "2026-03-22"
  }, {
    slug: "maildrop",
    name: "MailDrop",
    description: "Email Marketing Platform",
    stack: ["React.js", "TypeScript", "Golang", "PostgreSQL"],
    about: "MailDrop is a full-featured email marketing plaform that supports campaigns & subscribers management while allowing users to send bulk emails to their audiences seamlessly. It is built to be user-friendly, scalable and fast.",
    url: "https://maildrop.netlify.app",
    repo: "https://github.com/Habebamoo/MailDrop",
    images: ["/maildrop-img1.png", "/maildrop-img2.png", "/maildrop-img3.png", "/maildrop-img4.png"],
    location: "/project/maildrop",
    createdAt: "2025-07-06",
    updatedAt: "2026-01-24"
  }
]