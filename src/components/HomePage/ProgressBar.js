import React from 'react';
import styles from './CurrentNodeInfo.module.css';
const ProgressBar = ({ bgcolor, progress, amount }) => {
  function blendColors(colorA, colorB, amount) {
    if (colorA !== undefined) {
      const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
      const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
      const r = Math.round(rA + (rB - rA) * amount)
        .toString(16)
        .padStart(2, '0');
      const g = Math.round(gA + (gB - gA) * amount)
        .toString(16)
        .padStart(2, '0');
      const b = Math.round(bA + (bB - bA) * amount)
        .toString(16)
        .padStart(2, '0');
      return '#' + r + g + b;
    }
  }
  const Parentdiv = {
    height: '95%',
    width: '10vw',
    backgroundColor: blendColors(
      `${bgcolor ? bgcolor : '#FFFFFF'}`,
      '#FFFFFF',
      0.8
    ),

    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: 'right',
  };
  const text = {
    backgroundColor: blendColors(bgcolor, '#FFFFFF', 0.8),
    marginLeft: 'auto',
    marginRight: 0,
    padding: '1.5%',
  };
  const Parentdivundefined = {
    height: '1.5vw',
    width: '10vw',
    backgroundColor: 'gainsboro',
    // display: "flex",
    // justifyContent: "center",
    // aligItems: "center",
    // position: "relative",
    color: 'black',
  };
  return (
    <>
      {amount === 'undefineddBm' || amount === 'undefineddb' ? (
        <div style={Parentdivundefined}></div>
      ) : (
        <div style={Parentdiv}>
          <div style={Childdiv}></div>
          <div style={text}> {amount} </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
