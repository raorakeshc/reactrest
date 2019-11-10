import React, { Component } from "react";
import "./App.css";
import Validator from "./shared/validator";
class NewItem extends Component {
  constructor(props) {
    super(props);
    this.validator = new Validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      email: "",
      phone: ""
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
        <span className="form-caption">Employee Contact Details</span>
        <div>
          <label className="field-name">
            Emp Id:
            <br />
            <input
              value={this.state.id}
              name="id"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="emp id"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            first_name:
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
              maxLength="40"
              onChange={this.handleInputChange}
              placeholder="last_name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Gender:
            <br />
            <input
              value={this.state.gender}
              name="gender"
              maxLength="2"
              onChange={this.handleInputChange}
              placeholder="gender"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Date OF Birth:
            <br />
            <input
              value={this.state.dob}
              name="dob"
              onChange={this.handleInputChange}
              placeholder="dob"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Email:
            <br />
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Phone No:
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
        <button onClick={() => this.onSubmit()}>Create</button>
      </div>
    );
  }
}
export default NewItem;
