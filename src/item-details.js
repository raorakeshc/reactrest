import React, { Component } from "react";
import "./App.css";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  render() {
    const item = this.props.item;
    return (
      <div className="input-panel">
        <span className="form-caption">{item.id}</span>
        <div>
          <span className="field-name">Id:</span>
          <br /> {item.id}
        </div>
        <div>
          <span className="field-name">first_name:</span>
          <br /> {item.first_name}
        </div>
        <div>
          <span className="field-name">last_name:</span>
          <br /> {item.last_name}
        </div>
        <div>
          <span className="field-name">gender:</span>
          <br /> {item.gender}
        </div>
        <div>
          <span className="field-name">date of birth:</span>
          <br /> {item.dob}
        </div>
        <br />
        <button onClick={() => this.onDelete()}>Delete</button>
        <button onClick={() => this.onEdit()}>Edit</button>
      </div>
    );
  }
  onEdit() {
    this.props.onEdit();
  }
  onDelete() {
    const item = this.props.item;
    if (window.confirm("Are you sure to delete item: " + item.name + " ?")) {
      this.props.onDelete(item.link);
    }
  }
}
export default ItemDetails;
