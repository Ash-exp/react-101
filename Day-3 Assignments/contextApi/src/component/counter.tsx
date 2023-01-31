import { useState, FC } from 'react';
type counterProps = {
  startCounter?: number;
  startSquare?: number;
};
const Counter = ({ startCounter, startSquare, index }: counterProps) => {
  return (
    <>
      <h3>Increment Counter : {counter}</h3>
      <h3>Square Counter : {squareCounter}</h3>
      <button onClick={}>INCREMENT</button>
      <button onClick={}>SQUARE</button>
    </>
  );
};

export default Counter;
