import { createSlice } from "@reduxjs/toolkit";

const playerSlice= createSlice({
    name:"player",
    initialState:{
        course:{
            modules:[
                {
                id:"1",
                title:"Exploring Redux",
                lessons:[{
                    id:"8jx96lzHNJE",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"SbCedTlJWTs",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"SO8lBVWF2Y8",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"novnyCaa7To",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"vxkbf5QMA2g",
                    title:"Initial",
                    duration:"14:20"
                }]

            },{
                id:"2",
                title:"Exploring Redux",
                lessons:[{
                    id:"8jx96lzHNJE",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"SbCedTlJWTs",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"SO8lBVWF2Y8",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"novnyCaa7To",
                    title:"Initial",
                    duration:"14:20"
                },
                {
                    id:"vxkbf5QMA2g",
                    title:"Initial",
                    duration:"14:20"
                }]

            }],
            
        },
        currentModuleIndex:0,
        currentLessonIndex:0,
    },
    reducers:{
        play:(state,action)=>{
            state.currentModuleIndex = action.payload[0];
            state.currentLessonIndex = action.payload[1];
            

        }
    }

})

export const player = playerSlice.reducer;

export const {play} = playerSlice.actions;