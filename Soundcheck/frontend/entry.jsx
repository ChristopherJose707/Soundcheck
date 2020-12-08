import React from "react";
import ReactDOM from "react-dom";
// import Root from './components/root';
import configureStore from './store/store';
import * as SessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    //test start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = SessionAPIUtil.login;
    window.signup = SessionAPIUtil.signup;
    window.logout = SessionAPIUtil.logout;
    //test end
    
    const root = document.getElementById("root");
    ReactDOM.render(<h1>React is Working</h1>, root)
})