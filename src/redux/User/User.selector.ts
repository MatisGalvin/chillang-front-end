import { IStore } from "..";

function selectCurrentUser(store: IStore) {
  return store.user;
}

export { selectCurrentUser };
