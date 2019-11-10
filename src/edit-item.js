import React, { Component } from "react";
import "./App.css";
import Validator from "./shared/validator";
class EditItem extends Component {
  constructor(props) {
    super(props);
    this.validator = new Validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    const itemToEdit = props.item;
    this.state = {
      id: itemToEdit.id,
      first_name: itemToEdit.first_name,
      last_name: itemToEdit.last_name,
      gender: itemToEdit.gender,
      dob: itemToEdit.dob,
      phone: itemToEdit.phone
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  onCancel() {
    this.props.onCancel();
  }
  onSubmit() {
    if (this.validator.validateInputs(this.state)) {
      this.props.onSubmit(this.state);
    }
  }
  render() {
    return (
      <div className="input-panel">
        <span className="form-caption">Edit Employee Details:</span>
        {""}
        <span>{this.state.name}</span>
        <div>
          <label className="field-name">
            Id:
            <br />
            <input
              value={this.state.id}
              name="id"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="item name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            First Name:
            <br />
            <input
              value={this.state.first_name}
              name="first_name"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="first_name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            last_name:
            <br />
            <input
              value={this.state.last_name}
              name="last_name"
              maxLength="4"
              onChange={this.handleInputChange}
              placeholder="last_name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Date Of Birth:
            <br />
            <input
              value={this.state.dob}
              name="dob"
              maxLength="40"
              onChange={this.handleInputChange}
              placeholder="dob"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            phone:
            <br />
            <input
              value={this.state.phone}
              name="phone"
              onChange={this.handleInputChange}
              placeholder="phone"
            />
          </label>
        </div>
        <br />
        <button onClick={() => this.onCancel()}>Cancel</button>
        <button onClick={() => this.onSubmit()}>Update</button>
      </div>
    );
  }
}
export default EditItem;
