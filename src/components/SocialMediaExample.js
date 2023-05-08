import { useState } from "react";

const SocialMediaExample = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  return (
    <div style={{ width: "300px", margin: "10px auto", textAlign: "center" }}>
      <button
        onClick={() => setLikeCount(likeCount + 1)}
        style={{ border: "none", marginRight: "10px", padding: '10px', backgroundColor: likeCount > 0 ? "#4267B2" : 'white'}}
      >
        Like {likeCount}
      </button>
      <button
        onClick={() => setCommentCount(commentCount + 1)}
        style={{ border: "none", padding: '10px', backgroundColor: commentCount > 0 ? "#4267B2" : 'white' }}
      >
        Comment {commentCount}
      </button>
    </div>
  );
};

export default SocialMediaExample;



/*
	- State values:
	 - Strings
	 - Boolean
	 - Arrays
	 - Objects
*/
