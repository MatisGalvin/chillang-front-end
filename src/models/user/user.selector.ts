import { IStore } from "models";

function selectCurrentUser(store: IStore) {
  return store.user;
}

function selectProjectList(store: IStore) {
  return store.user?.projects;
}

export { selectCurrentUser, selectProjectList };
