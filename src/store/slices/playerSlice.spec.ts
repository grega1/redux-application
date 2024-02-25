import { it, expect, describe } from "vitest";
import { playerSlice, player, play, next, PlayerState} from "./playerSlice";

const initialState:PlayerState = {
   
    course: {
        id:"1",
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
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  }
describe("player slice", () => {
  it("should be able to play a video", () => {
   const state = player(initialState,play([1,1]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
});
it("should be able to play a next video", () => {
    const state = player(initialState,next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)})

it("should be able to play a next module", () => {
    
    const state = player({...initialState, currentLessonIndex:2, currentModuleIndex:0},next())
   

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
})




});

