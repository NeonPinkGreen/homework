import React, { Component } from "react";
import List from "../List/List";

class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond() {
    this.state.secondList.unshift(this.state.firstList.shift());
    this.setState(this.state);
  }

  transferToFirst() {
    this.state.firstList.unshift(this.state.secondList.shift());
    this.setState(this.state);
  }

  transferToThird() {
    this.state.thirdList.unshift(this.state.secondList.shift());
    this.setState(this.state);
  }

  removeLastItem() {
    this.state.thirdList.splice(this.state.thirdList.length - 1, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="ToDo">
        <List
          list={this.state.firstList}
          actions={[
            {
              text: "Transfer first to right",
              action: this.transferToSecond.bind(this),
            },
          ]}
        />
        <List
          list={this.state.secondList}
          actions={[
            {
              text: "Transfer first to left",
              action: this.transferToFirst.bind(this),
            },
            {
              text: "Transfer first to right",
              action: this.transferToThird.bind(this),
            },
          ]}
        />
        <List
          list={this.state.thirdList}
          actions={[
            {
              text: "Remove last item",
              action: this.removeLastItem.bind(this),
            },
          ]}
        />
      </div>
    );
  }
}

export default ToDo;
