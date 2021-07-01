import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12999',
    ImageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '15600',
    ImageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12999',
    ImageUrl: '/img/sneakers/5.png',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '15600',
    ImageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between align-center  mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="s" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card ImageUrl={obj.ImageUrl} price={obj.price} title={obj.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
