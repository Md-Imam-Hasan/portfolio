import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.scss'

function App() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
    </div>
  );
}

export default App;
