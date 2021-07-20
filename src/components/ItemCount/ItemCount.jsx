import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemCount.scss';

const ItemCount = () => (
  <div>
    <button>-</button>
    <input type="text" name="count" id="count" className="inputCount" placeholder="1"/>
    <button>+</button>
  </div>
);

ItemCount.propTypes = {};

ItemCount.defaultProps = {};

export default ItemCount;
