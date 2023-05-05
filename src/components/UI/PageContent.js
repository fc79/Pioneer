import React from 'react';
import styles from './PageContent.module.css';
const PageContent = (props) => {
  return (
    <main
      className={
        props?.className
          ? props?.hideCurrentNode
            ? `${props.className} ${styles.content} ${styles['content__current-node-hided']}`
            : `${props.className} ${styles.content} ${styles['content__current-node-showed']}`
          : props?.hideCurrentNode
          ? `${styles.content} ${styles['content__current-node-hided']}`
          : `${styles.content} ${styles['content__current-node-showed']}`
      }
    >
      {props?.children}
    </main>
  );
};

export default PageContent;
