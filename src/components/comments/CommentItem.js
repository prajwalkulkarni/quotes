import classes from './CommentItem.module.css';

const CommentItem = (props) => {
  return (
    <div className={classes.commentcontainer}>
      <p className={classes.usercomment}>{props.user} says...</p>
      <li className={classes.item}>
        <p>{props.text}</p>
      </li>
    </div>
  );
};

export default CommentItem;
