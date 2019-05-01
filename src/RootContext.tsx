import { createGlobalState } from "react-context-global-state";

const TODO = [
  {
    text: "散髪に行く",
    isCompleted: false
  },
  {
    text: "買い物に行く",
    isCompleted: false
  },
  {
    text: "洗車をする",
    isCompleted: true
  },
  {
    text: "散髪に行く",
    isCompleted: false
  },
  {
    text: "買い物に行く",
    isCompleted: true
  },
  {
    text: "洗車をする",
    isCompleted: false
  },
  {
    text: "散髪に行く",
    isCompleted: false
  },
  {
    text: "買い物に行く",
    isCompleted: true
  },
  {
    text: "洗車をする",
    isCompleted: true
  }
];

const initialState = { TODO };

export const {
  StateProvider: Provider,
  StateConsumer: Consumer
} = createGlobalState(initialState);
