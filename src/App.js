import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import "./components/Style.css"

function App() {
  return (
    <div className="App">
      <div>
        <Home Abt="About" Cnt="contact"/>
      </div>
      <About Read="Read more..."/>
      <div>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
