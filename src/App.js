import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import zaferes from './images/zaferes.png';
import airBnbData
  from './components/data';
import './style.css';
function App() {
  const dataElement = airBnbData.map(item => {
    console.log(item);
    return <Card
      img ={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  });

    return (
      <div>
        <Navbar />
        <Hero />
        {dataElement}
      </div>
  );
};

export default App;
