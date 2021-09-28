import { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const userTextRef = useRef()
  const {sendRequest,error,status} = useHttp(addComment)
  const [isValid,setIsValid] = useState(true)
  const {onAddedComment} = props
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    const enteredComment = commentTextRef.current.value
    const enteredUsername = userTextRef.current.value
    if(enteredComment.trim()==="" || enteredUsername.trim() ===""){
      setIsValid(false)
      return
    }
    // send comment to server
    
    sendRequest({commentData:{text:enteredComment,username:enteredUsername},quoteId:props.quoteId})
  };

  const focusHandler = () =>{
    setIsValid(true)
  }
  

  useEffect(()=>{
    if(status==='completed' && !error){
      onAddedComment(props.quoteId);
    }
  },[status,error,onAddedComment,props.quoteId])

  return (
    
    <form className={classes.form} onSubmit={submitFormHandler}>
      {!isValid && <p className={classes.error}>One or more fields empty!</p>}
      {status==="pending"&&<div><LoadingSpinner/></div>}
      <div className={classes.control}>
        <label htmlFor='username'>Your Name</label>
        <input type='text' id='username' onFocus={focusHandler} ref={userTextRef}/>
      </div>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' onFocus={focusHandler} rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
