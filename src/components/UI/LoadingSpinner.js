import React from 'react';
import { Spin } from 'antd';

function LoadingSpinner(props) {
  return (
    <Spin
      tip="Loading..."
      size="large"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      className={props.className}
    ></Spin>
  );
}

export default LoadingSpinner;
