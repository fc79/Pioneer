import React from 'react';
import styles from './Popup.module.css';
const Popup = ({
  record,
  visible,
  x,
  y,
  getCurrentNode,
  getNodeOnMap,
  showOnMap,
}) => {
  return (
    <React.Fragment>
      {visible && (
        <ul className={styles.popup} style={{ left: `${x}px`, top: `${y}px` }}>
          <li onClick={getCurrentNode.bind(this, record?.node_id)}>
            Current Node Info
          </li>
          {showOnMap && (
            <li onClick={getNodeOnMap.bind(this, record?.node_id)}>
              Show On Map
            </li>
          )}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Popup;
