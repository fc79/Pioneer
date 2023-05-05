import React, { useState } from 'react';
import styles from './Loading.module.css';
const Loading = (props) => {
  const [counter, setCounter] = useState(1);
  const items = [counter + 2, counter + 1, counter];
  setTimeout(() => setCounter(counter + 1), 1000);
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        {items.map((item) => (
          <span
            className={`${styles.selected} ${
              item % 3 === 0 ? '' : styles['de-selected']
            }`}
            key={item}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default Loading;
