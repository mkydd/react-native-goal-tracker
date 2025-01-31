import { createSlice } from "@reduxjs/toolkit";

interface Goal {
  name: string;
  timeLine: string;
  completed: boolean;
  count: number;
  total: 1 | 12 | 365;
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
      count: 0,
      total: 365,
    },
    {
      name: "read",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "workout",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "run",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "eat healthy",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "walk",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "run",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
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
    deleteGoal: (state, action) => {
      state.allGoals = state.allGoals.filter(
        (goal) => goal.name !== action.payload.name
      );
    },
    incrementCount: (state, action) => {
      let newGoals = [...state.allGoals];

      const goalToUpdate = newGoals.find(
        (goal) => goal.name === action.payload.name
      );
      if (goalToUpdate) {
        goalToUpdate.count += 1;
      }

      state.allGoals = newGoals;
    },
    decrementCount: (state, action) => {
      let newGoals = [...state.allGoals];

      const goalToUpdate = newGoals.find(
        (goal) => goal.name === action.payload.name
      );
      if (goalToUpdate && goalToUpdate.count > 0) {
        goalToUpdate.count -= 1;
      }

      state.allGoals = newGoals;
    },
  },
});

export const {
  addGoal,
  changeCompleted,
  deleteGoal,
  incrementCount,
  decrementCount,
} = exampleSlice.actions;

export default exampleSlice.reducer;
