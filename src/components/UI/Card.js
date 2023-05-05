import React from 'react';
import styles from './Card.module.css';
function Card(props) {
  return (
    <div
      className={
        props.className ? `${styles.Card} ${props.className}` : `${styles.Card}`
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
