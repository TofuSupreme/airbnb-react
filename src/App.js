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
      img ={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      location ={item.location}
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
