import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import zaferes from './images/zaferes.png';
import './style.css';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img={zaferes}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} />
    </div>
  );
}

export default App;
