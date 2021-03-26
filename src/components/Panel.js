import React from "react";
import PropTypes from 'prop-types';

const styles = {
  color: 'red',
  width: '250px',
  border: '2px solid',
  borderColor: 'orange',
  backgroundColor: '#5262',
};

const Panel = ({ title, children }) => (
    <div style={styles}> 
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

