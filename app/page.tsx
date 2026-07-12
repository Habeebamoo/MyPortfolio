import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"
import Hero from "@/src/components/Hero"
import Main from "@/src/components/Main"
import NowPlaying from "@/src/components/NowPlaying"

const page = () => {
  return (
    <main className="px-6 sm:w-150 md:w-200 border-l border-r border-gray-300 mx-auto">
      <Header />
      <Hero />
      <NowPlaying />
      <Main />
      <Footer />
    </main>
  )
}

export default page