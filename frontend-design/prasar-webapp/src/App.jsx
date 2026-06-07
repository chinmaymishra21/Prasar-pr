import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmpathyPivot from './components/EmpathyPivot'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
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
          <Portfolio />
          <Contact />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
