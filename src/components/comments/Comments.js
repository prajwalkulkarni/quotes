import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList'
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest,status,data} = useHttp(getAllComments)
  let comments;
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const params = useParams()
  
  useEffect(()=>{
    sendRequest(params.quoteId)
  },[params.quoteId,sendRequest])
  
  const addedCommentHandler = useCallback(()=>{
    sendRequest(params.quoteId)
  },[sendRequest,params.quoteId])
    if(status==="pending"){
      comments = <div className='centered'>
        <LoadingSpinner/>
      </div>
    }

    if(status==="completed" && (data&& data.length>0)){
      comments = <CommentsList comments={data}/>
    }

    if(status==="completed" && (!data||data.length===0)){
      comments = <p className='centered'>No comments yet!</p>
    }
  
 
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddedComment={addedCommentHandler} />}

      
      <p>Comments...</p>

      {comments}
    </section>
  );
};

export default Comments;
