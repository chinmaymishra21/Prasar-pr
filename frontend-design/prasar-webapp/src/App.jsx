import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmpathyPivot from './components/EmpathyPivot'
import Philosophy from './components/Philosophy'
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
          <Philosophy />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
