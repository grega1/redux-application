import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";

export function Module() {
  return (
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
      <Lesson />
    </div>
  );
}
