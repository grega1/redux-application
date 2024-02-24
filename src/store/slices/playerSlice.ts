import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

interface Course {
  id:number,
  modules:Array<{
    id:number,
    title:string,
    lessons:Array<{
      id:string,
      title:string,
      duration:string,
    }>
  }>

}
export interface PlayerState {
  course:Course | null,
  currentModuleIndex:number,
  currentLessonIndex:number,
}
const initialState:PlayerState={
  course:null,
  currentModuleIndex:0,
  currentLessonIndex:0,
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const currentModule = state.course?.modules[state.currentModuleIndex];
      const nextModuleIndex = state.currentModuleIndex + 1;

      if (nextLessonIndex < currentModule.lessons.length) {
        state.currentLessonIndex = nextLessonIndex;
      } else if (nextModuleIndex < state.course?.modules.length) {
        state.currentModuleIndex = nextModuleIndex;
        state.currentLessonIndex = 0;
      }
    },
  },
});

export const player = playerSlice.reducer;

export const { play, next } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentLesson, currentModule };
  });
};
