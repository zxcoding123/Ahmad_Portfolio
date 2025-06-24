import './App.css'
import './index.css'
import WelcomePage from './assets/components/WelcomePage'
import AboutBento from './assets/components/AboutSection'
import TechSection from './assets/components/TechSection'
import WorksSection from './assets/components/SingleWorkSection'
import DoubleWorkSection from './assets/components/TwoWorkSection'
import ScrollVelocity from './assets/components/ScrollVelocity'
import TestimonialSlider from './assets/components/TestimonailSlider'
import ContactSection from './assets/components/ContactMe'
import Footer from './assets/components/Footer'


function App() {

  return (
    <>
        <WelcomePage></WelcomePage>
        <AboutBento></AboutBento>
        <TechSection></TechSection>
        <ScrollVelocity></ScrollVelocity>
        <WorksSection></WorksSection>
        <DoubleWorkSection></DoubleWorkSection>
        <TestimonialSlider></TestimonialSlider>
        <ContactSection></ContactSection>
        <Footer></Footer>
    </>

  )
}

export default App
