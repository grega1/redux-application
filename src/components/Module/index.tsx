import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";
import { useAppSelector } from "../../store";
interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}
export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  const lessons = useAppSelector((state) => state.player.course.module[moduleIndex].lessons);

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
      {lessons.map((lesson)=>(<Lesson key={lesson.id} title={lesson.title} duration={lesson.duration} />))}
      </Collapsible.Content >
    </Collapsible.Root>
  );
}
