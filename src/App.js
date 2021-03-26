import React from 'react';
import Painting from "./components/Painting";
import paintings from "./paintings.json";
import Panel from "./components/Panel"

// const painting = {
//   id: "id-1",
//   url:
//     "https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg",
//   title: "Feathers",
//   price: 500,
//   quantity: 10,
// };

// const numbers = [1, 2, 3, 4];

const App = () => {
  return (
    <div>
      <Panel>
        <p>привет</p>
      </Panel>
      <h1> Главн компонент-контейнер приложения</h1>
      <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              // url="https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg"
              // title="это тайтл 1"
              // price="500"
            />
          </li>
        ))}
      </ul>

      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        // url="https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg"
        // title="это тайтл 1"
        // price="500"
      /> */}
      {/* <Painting
        url="https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg"
        title="это тайтл 2"
        price={2000}
      /> */}
    </div>
  );
};

export default App;
