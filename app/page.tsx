import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BookingWidget from '@/components/BookingWidget'
import Services from '@/components/Services'
import Rooms from '@/components/Rooms'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingWidget />
      <Services />
      <Rooms />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
