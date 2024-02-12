import ReactPlayer from "react-player";

export function VideoPlayer() {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-500 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=CcNo07Xp8aQ"
        />
      </div>
    </div>
  );
}
