import ReactPlayer from "react-player";
interface VideoPlayerProps{
  url:string,
}
export function VideoPlayer({url}:VideoPlayerProps) {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-500 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={url}
        />
      </div>
    </div>
  );
}
