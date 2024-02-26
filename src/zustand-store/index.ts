import { create } from "zustand";

interface Course {
  id: string;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}
export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
  play: (moduleAndLessonIndex: [number, number]) => void;
  next: () => void;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: false,

    play: (moduleAndLessonIndex: [number, number]) => {
      const [moduleIndex, lessonIndex] = moduleAndLessonIndex;
      set({
        currentLessonIndex: lessonIndex,
        currentModuleIndex: moduleIndex,
      });
    },
    next: () => {
      const { currentModuleIndex, currentLessonIndex, course } = get();
      const nextLessonIndex = currentLessonIndex + 1;
      const nextModuleIndex = currentModuleIndex + 1;
      if (course) {
        if (
          nextLessonIndex < course?.modules[currentModuleIndex].lessons.length
        ) {
          set({ currentLessonIndex: nextLessonIndex });
        } else if (nextModuleIndex < course.modules.length) {
          set({ currentModuleIndex: nextModuleIndex, currentLessonIndex: 0 });
        }
      }
    },
  };
});
