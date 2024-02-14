import { MessageCircle } from "lucide-react";
import { Aside } from "../components/Aside/index.tsx"
import { VideoPlayer } from "../components/VideoPlayer";
import { Header } from "../components/Header";
import { useAppSelector } from "../store/index.ts";

export function Player() {
   
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
      <div className="flex items-center justify-between">
        <Header />

          <button className="flex items-center gap-2 rounded bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600">
            <MessageCircle className="w-4 h-4" /> Rate Us!{" "}
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
        <VideoPlayer/>
        <Aside />
        </main>
      </div>
    </div>
  );
}
