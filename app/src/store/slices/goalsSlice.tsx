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
      name: "Stretch",
      timeLine: "daily",
      completed: false,
      count: 130,
      total: 365,
    },
    {
      name: "Read",
      timeLine: "daily",
      completed: false,
      count: 0,
      total: 365,
    },
    {
      name: "Go on Hikes",
      timeLine: "monthly",
      completed: false,
      count: 2,
      total: 12,
    },
    {
      name: "Go on Trips",
      timeLine: "monthly",
      completed: false,
      count: 0,
      total: 12,
    },
    {
      name: "Run a Marathon",
      timeLine: "yearly",
      completed: false,
      count: 1,
      total: 1,
    },
    {
      name: "Payoff Student Loans",
      timeLine: "yearly",
      completed: false,
      count: 0,
      total: 1,
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
