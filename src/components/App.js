import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import VideoFunctionality from "./VideoFunctionality.js";
import { useState } from "react";
import Comments from "./Comments.js";

function App() {
  const [addVote, setAddVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)
  const [onCommentClick, setOnCommentClick] = useState(false)

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
            <VideoInfo data={video} />
      <VideoFunctionality upVotes={addVote} 
                          setAddVote={setAddVote}
                          downVote={downVote}
                          setDownVote={setDownVote}
                          onCommentClick={onCommentClick}
                          setOnCommentClick={setOnCommentClick}/>
      <Comments data={video} onCommentClick={onCommentClick}/>
    </div>
  );
}

export default App;
