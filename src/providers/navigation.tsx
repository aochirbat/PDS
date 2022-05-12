import { history } from "App";

function reload(url: string) {
  history.push(url);
}

function goBack() {
  history.back();
}

function navigate(url: string, state?: any) {
  history.push(url, state);
}

export const navigationService = {
  goBack,
  navigate,
  reload,
};
