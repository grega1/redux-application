import { Video } from "lucide-react";


 export function Lesson(){
    return(
        <nav className="relative flex flex-col gap-4 p-6">
          <button className="flex items-center gap-3 text-sm text-zinc-400">
            <Video className="w-4 h-4 text-zinc-500" />
            Exploring Redux
            <span className="text-xs ml-auto fonto-mono text-zinc-500">2:40</span>
          </button>
        </nav>
    )
}

