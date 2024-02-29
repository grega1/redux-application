import { it, expect, describe, beforeEach } from "vitest";

import { useStore } from ".";

const course = {
  id: "1",
  modules: [
    {
      id: 1,
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
      ],
    },
    {
      id: 2,
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
      ],
    },
  ],
};

const initialState = useStore.getState();

describe("Zustand store", () => {
  beforeEach(() => {
    useStore.setState(initialState);
  });

  it("should be able to play a video", () => {
    const { play } = useStore.getState();
    play([1, 1]);

    const { currentLessonIndex, currentModuleIndex } = useStore.getState();
    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(1);
  });
  it("should be able to play a next video", () => {
    useStore.setState({ course });
    const { next } = useStore.getState();

    next();
    const { currentLessonIndex, currentModuleIndex } = useStore.getState();
    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to play a next module", () => {
    useStore.setState({ course });
    const { next } = useStore.getState();
    useStore.setState({ currentLessonIndex: 1, currentModuleIndex: 0 });
    next();

    const { currentLessonIndex, currentModuleIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });
  it("should not be able to jump to the next module if there is no next module available", () => {
    useStore.setState({ course });
    const { next } = useStore.getState();
    useStore.setState({ currentLessonIndex: 1, currentModuleIndex: 1 });
    next();

    const { currentLessonIndex, currentModuleIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(1);
  });
});
