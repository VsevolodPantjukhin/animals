import React from 'react';
import AnimalShow from '../components/AnimalShow/AnimalShow';

import { useState } from 'react';

const App = () => {
  // const handleClick = () => {
  //   console.log('button was clicked');
  // };

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Animal</button>
      {console.log(count)}
    </div>
  );
};
export default App;
