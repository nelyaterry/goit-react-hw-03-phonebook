import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ButtonText from "../Button/Button";
import { Form, Label, InputName, Input } from "./ContactForm.styled";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: uuidv4(),
      [name]: value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <Label>
          <InputName>Name</InputName>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handelChange}
          />
        </Label>

        <Label>
          <InputName>Number</InputName>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handelChange}
          />
        </Label>

        <ButtonText type="submit">Add Contact</ButtonText>
      </Form>
    );
  }
}
