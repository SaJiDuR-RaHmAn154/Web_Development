import { useState } from "react";

export default function LikeButton() {
  // This heart icon is copied from https://fontawesome.com/icons/heart?f=classic&s=solid
  // the link copied in index.html  is taken from fontawesome.cdn
  // state variable isLiked can only be used inside the component function

  // Closure is a feature in JS where an inner function has access to the outer function's variables

  let [isLiked, setIsLiked] = useState(false); //initial state false means it's unliked yet
  let [count, setCount] = useState(0);

  let likeStyle = { color: "red" };

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count = {count}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
