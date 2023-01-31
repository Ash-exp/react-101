import { useState } from 'react';
import Counter from './component/counter';

const App = () => {
  return (
    <center>
      <h1>Welcome to the world of counter</h1>
      {counters.map((counter: number, index: number) => {
        return (
          <Counter
            key={index}
            startCounter={counter}
            startSquare={squareCounters[index]}
            index={index}
          />
        );
      })}
    </center>
  );
};

export default App;
