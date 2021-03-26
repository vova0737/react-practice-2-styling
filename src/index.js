import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// ReactDOM.render(template, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// const painting = {
//   id: "id-1",
//     url: "https://bipbap.ru/wp-content/uploads/2017/04/blue-jelly-candy-thumb.jpg",
//     title: "Feathers",
//     price: 500,
//     quantity: 10,
// };

// const template = (
//     <div>
//         <img src={painting.url} alt={painting.title} width="480" />
//         <h2>{painting.title}</h2>
//         <p>цена - {painting.price} grn</p>
//         <button type="button"> Add to korzina </button>
//     </div>
// );
