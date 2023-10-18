import React from 'react';
import AnimalShow from '../components/AnimalShow/AnimalShow';

const App = () => {
  // const handleClick = () => {
  //   console.log('button was clicked');
  // };

  return (
    <div>
      <button onClick={() => console.log('Button was clicked!')}>
        Add Animal
      </button>
    </div>
  );
};
export default App;
