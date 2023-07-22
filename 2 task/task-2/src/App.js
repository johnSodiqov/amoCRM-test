import './App.css';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="decor">
          <div className="red-light"></div>
          <div className="purple-light"></div>
          <div className="purple-ball"></div>
          <div className="red-ball1"></div>
          <div className="red-ball2"></div>
        </div>
      </div>
      <Navbar/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
