import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.scss'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
