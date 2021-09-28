import { useRef, useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Prompt } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isValid,setIsValid] = useState(true)
  const [isFocused,setIsFocused] = useState(false)

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if(enteredAuthor.trim()==="" || enteredText.trim() ===""){
      setIsValid(false)
      return
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function formFocusHandler(){
    setIsFocused(true)
  }

  function addQuoteHandler(){
    setIsFocused(false)
  }

  const focusHandler = () =>{
    setIsValid(true)
  }

  return (
    <Fragment>
      <Prompt when={isFocused} message={(location)=>
      'Are you sure you want to navigate away? All the changes made will be lost'}/>
      {!isValid && <p className={classes.error}>One or more fields empty!</p>}
    <Card>
      <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' onFocus={focusHandler} ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' onFocus={focusHandler} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={addQuoteHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
