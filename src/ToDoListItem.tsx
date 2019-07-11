import React, { Component } from "react";
import "./ToDoListItem.css";

interface FormData {
  title: string;
  description: string;
  onClick: () => void;
}

class ToDoListItem extends Component<FormData> {
  render() {
    const { title, description, onClick } = this.props;

    return (
      <div className="ToDoListItem" onClick={onClick}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
      
    );
  }
}

export default ToDoListItem;
