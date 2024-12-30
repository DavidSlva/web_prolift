import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import ProLiftApp from './components/ProLiftApp';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from "./components/FAQ";
import Brands from "./components/Brands";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar/>
            <main>
                <Hero/>
                <Services/>
                <About/>
                <Projects/>
                <ProLiftApp/>
                <Brands/>
                <FAQ/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;