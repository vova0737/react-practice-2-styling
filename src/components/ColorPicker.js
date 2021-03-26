import React from 'react';
import './ColorPicker.css'

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 40,
//         height: 30,
//         // outline: '2px solid',
//         margin: 8
//     }
// };

const ColorPicker = ({ options }) => {
    return (
        <div>
            <h2>Color Picker</h2>
            <div>{options.map(({ label, color }) => <span key={label}
                className= 'ColorPicker__option'
                style={{ backgroundColor: color }}> {color} </span>)}</div>
        </div>
    );
};

export default ColorPicker;