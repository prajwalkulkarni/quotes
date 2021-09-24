import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {sendRequest,data,error,status} = useHttp(addComment)
  
  
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    
    sendRequest({commentData:{text:commentTextRef.current.value},quoteId:props.quoteId})
  };

  
  

  useEffect(()=>{
    if(status==='completed' && !error){
      props.onAddedComment(props.quoteId);
    }
  },[status,error])

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status==="pending"&&<div><LoadingSpinner/></div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;