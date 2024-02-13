import { Video } from "lucide-react";

interface LessonProps{
title:string,
duration:string
}


 export function Lesson({title, duration}: LessonProps){
    return(
        <nav className="relative flex flex-col gap-4 p-6">
          <button className="flex items-center gap-3 text-sm text-zinc-400">
            <Video className="w-4 h-4 text-zinc-500" />
           {title}
            <span className="text-xs ml-auto fonto-mono text-zinc-500">{duration}</span>
          </button>
        </nav>
    )
}

