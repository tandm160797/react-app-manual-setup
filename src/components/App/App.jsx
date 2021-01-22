import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useClock } from '$hooks';
import { Button } from 'reactstrap';
import { increase, decrease } from '$redux-toolkit/slice/number';
import './App.scss';

const App = () => {
  const timeString = useClock();
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();

  const handleIncreaseClick = (evt) => {
    dispatch(increase(10));
  };
  const handleDecreaseClick = (evt) => {
    dispatch(decrease(100));
  };

  return (
    <div>
      <h1 className="text-center text-info border border-success">
        Hello World!
      </h1>
      <h3>It's {timeString}</h3>
      {number}
      <br />
      <Button onClick={(evt) => handleIncreaseClick(evt)}>+</Button>
      <Button onClick={(evt) => handleDecreaseClick(evt)}>-</Button>
    </div>
  );
};

export default App;
