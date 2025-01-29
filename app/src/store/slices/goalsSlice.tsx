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
      state.allGoals = [action.payload, ...state.allGoals];
    },
    changeCompleted: (state, action) => {
      let newGoals = [...state.allGoals];

      const goalToUpdate = newGoals.find(
        (goal) => goal.name === action.payload.name
      );
      if (goalToUpdate) {
        goalToUpdate.completed = !goalToUpdate.completed;
      }

      state.allGoals = newGoals;
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload;
    },
  },
});

export const { addGoal, changeCompleted, incrementByAmount } =
  exampleSlice.actions;

export default exampleSlice.reducer;
