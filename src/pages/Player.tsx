import { ChevronDown, MessageCircle, Video } from "lucide-react";
import  ReactPlayer  from "react-player"

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap1">
            <h1 className="text-2xl font-bold">Redux + Zustand</h1>
            <span className="text-sm text-zinc-400">Fundamentals tools </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600">
            <MessageCircle className="w-4 h-4" /> Rate Us!{" "}
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <div className="w-full bg-zinc-500 aspect-video">
            <ReactPlayer width="100%" height="100%" controls url="https://www.youtube.com/watch?v=CcNo07Xp8aQ" />
            </div>
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-950 border-zinc-800 bg-zinc-900  overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 ">
            <div>
              <button className="flex w-full items-center bg-zinc-800 gap-3 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Exploring Redux</strong>
                  <span className="text-sm text-zinc-400">12 classes</span>
                </div>
                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
              </nav>
            </div>
            <div>
              <button className="flex w-full items-center bg-zinc-800 gap-3 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Exploring Redux</strong>
                  <span className="text-sm text-zinc-400">12 classes</span>
                </div>
                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
              </nav>
            </div>
            <div>
              <button className="flex w-full items-center bg-zinc-800 gap-3 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Exploring Redux</strong>
                  <span className="text-sm text-zinc-400">12 classes</span>
                </div>
                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  Exploring Redux
                  <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
                </button>
              </nav>
            </div>  
          </aside>
        </main>
      </div>
    </div>
  );
}
