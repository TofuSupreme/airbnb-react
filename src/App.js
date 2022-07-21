import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import zaferes from './images/zaferes.png';
import airBnbData
  from './components/data';
import './style.css';
function App() {
  airBnbData.map(item => {
    console.log(item);
    return (
      <div className="container">
        <Navbar />
        <Hero />
        <Card
          img={item.coverImg}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136} />

      </div>
    );
  });
};

export default App;
