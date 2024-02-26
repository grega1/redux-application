import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../../store/slices/playerSlice";
import { useAppSelector } from "../../store";
import { LoaderIcon } from "lucide-react";

export function VideoPlayer() {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();
  const isContentLoading = useAppSelector((state) => state.player.isLoading);

  const handleNextVideo = () => {
    dispatch(next());
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-500 aspect-video">
        {isContentLoading ? (
          <div className="flex h-full items-center justify-center"><LoaderIcon className="w-6 h-6 text-zinc-500 animate-spin" /></div>
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            playing
            onEnded={handleNextVideo}
            controls
            url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          />
        )}
      </div>
    </div>
  );
}
