import { IStore } from "models";

function getCurrentIndexProject(store: IStore) {
  return store.selectedProject.index;
}

function getCurrentProject(store: IStore) {
  const indexProject = getCurrentIndexProject(store);
  if (indexProject !== null) {
    return store.user.projects[indexProject];
  }
}

function getCurrentProjectPages(store: IStore) {
  const pages = getCurrentProject(store);
  return pages?.pages;
}

export { getCurrentIndexProject, getCurrentProject, getCurrentProjectPages };
