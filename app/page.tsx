import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"

const page = () => {
  return (
    <main className="px-6">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </main>
  )
}

export default page