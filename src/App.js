import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Menu from './components/Menu'
import './App.css'
import backgroundImg from './assets/endless-constellation.svg'


function App() {
  return (
    <div className="App" >
      <div className="Background-Img">
        <img src={backgroundImg} alt="background_img" />
      </div>
      <div className="Container" style={{ minHeight: "100vh" }} >
        <Menu />
        <Header className="header" />
      </div>
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
