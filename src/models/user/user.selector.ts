import { IStore } from "models";

function selectCurrentUser(store: IStore) {
  return store.user;
}

export { selectCurrentUser };
