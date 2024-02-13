import { useAppSelector } from "../../store";
import { Module } from "../Module";

export function Aside() {
  const modules = useAppSelector((state) => state.player.course.module);
  return (
    <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-950 border-zinc-800 bg-zinc-900  overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 ">
      {modules.map((module, index) => (
        <Module
          key={module.id}
          title={module.title}
          amountOfLessons={module.lessons.length}
          moduleIndex={index}
        />
      ))}
    </aside>
  );
}
