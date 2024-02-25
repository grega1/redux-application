import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadCourse, play } from "../../store/slices/playerSlice";
import { useEffect } from "react";
interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}
export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  const lessons = useAppSelector((state) => state.player.course?.modules[moduleIndex].lessons);
  const {currentModuleIndex, currentLessonIndex}= useAppSelector(state=>{
    const {currentModuleIndex, currentLessonIndex} = state.player;

    return {currentModuleIndex, currentLessonIndex}
  })
  
const dispatch = useAppDispatch()


  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center bg-zinc-800 gap-3 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">
            {amountOfLessons}lessons
          </span>
        </div>
        <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
      {lessons && lessons.map((lesson, lessonIndex)=>{
        const isCurrent = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex
        return (
        <Lesson key={lesson.id} 
        title={lesson.title} 
        duration={lesson.duration} 
        isCurrent={isCurrent}
        onPlay={()=> dispatch(play([moduleIndex, lessonIndex]))}/>)})}
      </Collapsible.Content >
    </Collapsible.Root>
  );
}
