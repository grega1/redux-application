import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../../store/slices/playerSlice";

export function VideoPlayer() {
  const dispatch = useDispatch();
  const{currentLesson}= useCurrentLesson();

  const handleNextVideo=()=>{
    dispatch(next())
  }
 
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-500 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          playing
          onEnded={handleNextVideo}
          controls
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      </div>
    </div>
  );
}
