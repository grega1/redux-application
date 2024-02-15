import { useAppSelector } from "../../store";

export function Header() {
  const {currentLesson, currentModule}= useAppSelector(state=>{
    const {currentModuleIndex, currentLessonIndex} = state.player;

    const currentModule= state.player.course.modules[currentModuleIndex]
    const currentLesson=currentModule.lessons[currentLessonIndex];

    return {currentLesson, currentModule}
  })
  return (
    
      <div className="flex flex-col gap1">
        <h1 className="text-2xl font-bold">{currentModule.title}</h1>
        <span className="text-sm text-zinc-400">{currentLesson.title} </span>
      </div>
    
  );
}
