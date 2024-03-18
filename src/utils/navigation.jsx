import { NavigationActions } from "@react-navigation/compat";
import { StackActions } from "@react-navigation/native";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}
function replace(routeNames, params) {
  console.log('naivgation' , routeNames);
  _navigator.dispatch(StackActions.replace(routeNames, params));
  return;
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  replace,
};
