import { IStore } from "models";

function getCurrentProjectIndex(store: IStore) {
  return store.navigation.projectIndex;
}

function getCurrentPageIndex(store: IStore) {
  return store.navigation.pageIndex;
}

function getCurrentTabIndex(store: IStore) {
  return store.navigation.tabIndex;
}

function getNavigation(store: IStore) {
  return store.navigation;
}

function getCurrentProject(store: IStore) {
  const indexProject = getCurrentProjectIndex(store);
  if (indexProject !== null) {
    return store.user.projects[indexProject];
  }
}

export {
  getCurrentProjectIndex,
  getCurrentProject,
  getCurrentPageIndex,
  getCurrentTabIndex,
  getNavigation,
};
