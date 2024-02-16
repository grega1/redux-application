import ReactPlayer from "react-player";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { next } from "../../store/slices.ts/playerSlice";

export function VideoPlayer() {
  const dispatch = useDispatch();
  const lesson= useAppSelector(state=>{
    const {currentModuleIndex, currentLessonIndex} = state.player;
    const currentLesson=state.player.course.modules[currentModuleIndex]?.lessons[currentLessonIndex];

    return currentLesson
  })

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
          url={`https://www.youtube.com/watch?v=${lesson.id}`}
        />
      </div>
    </div>
  );
}
