import { createGlobalState } from "react-context-global-state";

const initialState = { TODO: [] };

export const {
  StateProvider: Provider,
  StateConsumer: Consumer,
  setGlobalState,
  getGlobalState
} = createGlobalState(initialState);
