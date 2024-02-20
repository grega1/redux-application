import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Exploring Redux",
          lessons: [
            {
              id: "8jx96lzHNJE",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "SbCedTlJWTs",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "SO8lBVWF2Y8",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "novnyCaa7To",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "vxkbf5QMA2g",
              title: "Initial",
              duration: "14:20",
            },
          ],
        },
        {
          id: "2",
          title: "Exploring Redux",
          lessons: [
            {
              id: "8jx96lzHNJE",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "SbCedTlJWTs",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "SO8lBVWF2Y8",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "novnyCaa7To",
              title: "Initial",
              duration: "14:20",
            },
            {
              id: "vxkbf5QMA2g",
              title: "Initial",
              duration: "14:20",
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const currentModule = state.course.modules[state.currentModuleIndex];
      const nextModuleIndex = state.currentModuleIndex + 1;

      if (nextLessonIndex < currentModule.lessons.length) {
        state.currentLessonIndex = nextLessonIndex;
      } else if (nextModuleIndex < state.course.modules.length) {
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

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentLesson, currentModule };
  });
};
