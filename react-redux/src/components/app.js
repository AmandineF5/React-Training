import React, { Component } from "react";
import UserDetail from "../containers/user-detail";
import UserList from "../containers/user-list";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}
