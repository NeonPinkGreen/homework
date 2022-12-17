import React, { Component } from "react";
import List from "../List/List";

class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond() {
    return this.state.secondList.unshift(this.state.firstList.shift());
  }

  transferToFirst() {
    return this.state.firstList.unshift(this.state.secondList.shift());
  }

  transferToThird() {
    return this.state.thirdList.unshift(this.state.secondList.shift());
  }

  removeLastItem() {
    return this.state.thirdList.splice(this.state.thirdList.length - 1, 1);
  }

  render() {
    return (
      <div className="ToDo">
        <List
          list={this.state.firstList}
          actions={[
            { text: "Transfer first to right", action: this.transferToSecond },
          ]}
        />
        <List
          list={this.state.secondList}
          actions={[
            { text: "Transfer first to left", action: this.transferToFirst },
            { text: "Transfer first to right", action: this.transferToThird },
          ]}
        />
        <List
          list={this.state.thirdList}
          actions={[{ text: "Remove last item", action: this.removeLastItem }]}
        />
      </div>
    );
  }
}

export default ToDo;
