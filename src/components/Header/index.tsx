import { useEffect } from "react";
import { useCurrentLesson } from "../../store/slices/playerSlice";

export function Header() {
  const {currentLesson, currentModule}= useCurrentLesson();

  useEffect(()=>{
    document.title=`Watching ${currentLesson}`;
  },[currentLesson])
  return (
    
      <div className="flex flex-col gap1">
        <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
        <span className="text-sm text-zinc-400">{currentLesson?.title} </span>
      </div>
    
  );
}
