import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"

const page = () => {
  return (
    <main className="px-6 sm:w-150 md:w-200 border-l border-r border-gray-300 mx-auto">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </main>
  )
}

export default page