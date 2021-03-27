import React from 'react';
// import PropTypes from 'prop-types';

import Painting from './Painting/Painting';

import './PaintingList.css';

const PaintingList = ({ paintings }) => (
    <ul className="PaintingList" >
        {paintings.map(({ id, url, title, price, author, quantity }) => (
            <li key={id} className="PaintingList__item">
                <Painting
                    url={url}
                    title={title}
                    price={price}
                    // teg={author.tag}
                    quantity={quantity}
                />
            </li>
        ))}
    </ul>
);

export default PaintingList;
