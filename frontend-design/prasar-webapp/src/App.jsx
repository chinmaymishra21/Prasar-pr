import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmpathyPivot from './components/EmpathyPivot'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/ui/smooth-scroll'

function App() {
  return (
    <SmoothScroll>
      <div className="w-full bg-pearl">
        <Navbar />
        <main>
          <Hero />
          <EmpathyPivot />
          <Testimonials />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
