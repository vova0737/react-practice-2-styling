import React from "react";
import defaultImage from './default.png';
import PropTypes from 'prop-types';
import './Painting.css';

// const Painting = (props) => {
//     // return <div>Компонент карточки картины </div>;
//     return (
//       <div>
//         <img src={props.url} alt={props.title} width="160" />
//         <h2>{props.title}</h2>
//         <p>цена - {props.price} grn</p>
//         <button type="button"> Add to korzina </button>
//       </div>
//     );
// };

const Painting = ({url, title, price}) => {
  return (
    <div className="Painting">
      <img src={url} alt={title} width="160" />
      <h2>{title}</h2>
      <p>цена - {price} grn</p>
      <p>Цена {price < 1500 ? 'низкая' : 'вісокая'} </p>
      <button type="button"> Add to korzina </button>
    </div>
  );
};

Painting.defaultProps = {
    url: defaultImage
}
 
Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

};

export default Painting;
