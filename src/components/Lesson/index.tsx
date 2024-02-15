import { Video } from "lucide-react";

interface LessonProps{
title:string,
duration:string,
isCurrent?:boolean,
onPlay: () => void,
}


 export function Lesson({title, duration, onPlay, isCurrent=false}: LessonProps){

    return(
        <nav className="relative flex flex-col gap-4 p-6 ">
          <button data-active={isCurrent}  disabled={isCurrent} onClick={onPlay} className="flex group items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-green-500 enabled:hover:text-white">
           <Video className="w-4 h-4 data-[active=false]:text-zinc-500  data-[active=true]:text-green-500   data-[active=true]:fill-green-500"  />
           {title}
            <span className="text-xs ml-auto fonto-mono text-zinc-500">{duration}</span>
          </button>
        </nav>
    )
}

