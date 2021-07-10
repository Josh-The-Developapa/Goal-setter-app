import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ErrorModal from '../../UI/ErrorModal.js'

import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [error, setError] = useState()

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!enteredValue == '') {
    props.onAddGoal(enteredValue);
    setEnteredValue('')
    } else if (enteredValue == '') {
      setError({
         title: "An error occured",
         message: "Try entering some text this time"
     })
    }
  };

  function errorModalHandler() {
    setError('')
  }


  
  
  return (
    <div>
    {error && <div><ErrorModal title={error.title} message={error.message} onClickButton={errorModalHandler}/></div>}
    <div>
    <form onSubmit={formSubmitHandler}>
        <TextField onChange={goalInputChangeHandler} label="Course Goal" value={enteredValue}/>
      <Button type="submit" variant='contained' style={{backgroundColor: '#8b005d', color:'white', borderRadius: '15px'}}>Add Goal</Button>
    </form>
    </div>
    </div>
  );
};

export default CourseInput;
