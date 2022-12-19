import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, key) => (
            <li key={key}>{item.title}</li>
          ))}
        </ul>
        <div className="buttons">
          {this.props.list.length
            ? this.props.actions.map((item, key) => (
                <button onClick={() => item.action()} key={key}>
                  {item.text}
                </button>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default List;
