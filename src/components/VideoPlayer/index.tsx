import ReactPlayer from "react-player";

import { LoaderIcon } from "lucide-react";
import { useCurrentLesson, useStore } from "../../zustand-store";

export function VideoPlayer() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((state) => {
    return { isLoading: state.isLoading, next: state.next };
  });

  const handleNextVideo = () => {
    next();
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-500 aspect-video">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <LoaderIcon className="w-6 h-6 text-zinc-500 animate-spin" />
          </div>
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
