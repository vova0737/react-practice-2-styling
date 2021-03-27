import React from 'react';
import Painting from './components/Painting/Painting';
import paintings from "./paintings.json";
import Panel from "./components/Panel";

import PaintingList from './components/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';

// const numbers = [1, 2, 3, 4];

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'yellow', color: '#607d8b' },
];

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel>
        <p>привет</p>
      </Panel>

      <Panel> 
        <PaintingList paintings={paintings}>

        </PaintingList>
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

    </div>
  );
};

export default App;
