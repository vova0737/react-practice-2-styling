import React from "react";
import PropTypes from 'prop-types';
import styles from './Panel.module.css'

// const styles = {
//   color: 'red',
//   width: '250px',
//   border: '2px solid',
//   borderColor: 'orange',
//   backgroundColor: '#5262',
// };

const Panel = ({ title, children }) => (
    <div className={styles.container}> 
        {title}
        {children}

    </div>
)

Panel.defaultProps = {
  title: 'default title',
  children: [],
};


Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


// const Panel = (prop) => <div> Панель 
//  {prop.children}
// </div>;

export default Panel;
