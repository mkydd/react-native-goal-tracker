import { createSlice } from "@reduxjs/toolkit";

interface Goal {
  name: string;
  timeLine: string;
  completed: boolean;
}

interface GoalsState {
  allGoals: Goal[];
}

const initialState: GoalsState = {
  allGoals: [
    {
      name: "stretch",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "read",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "workout",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "run",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "eat healthy",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "walk",
      timeLine: "daily",
      completed: false,
    },
  ],
};

const exampleSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.allGoals.push(action.payload);
    },
    decrement: (state) => {
      //   state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload;
    },
  },
});

export const { addGoal, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
