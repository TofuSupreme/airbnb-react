import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import zaferes from './images/zaferes.png';
import airBnbData
  from './components/data';
import './style.css';
function App() {
  const cards = airBnbData.map(item => {
    console.log(item);
    return <Card
      key={item.id}
      item={item}
    />
  });

    return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
  );
};

export default App;
