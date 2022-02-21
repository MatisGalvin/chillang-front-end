import { IStore } from "models";

function selectCurrentUser(store: IStore) {
  return store.user;
}

function getProjectList(store: IStore) {
  return store.user?.projects;
}

export { selectCurrentUser, getProjectList };
