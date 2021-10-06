import React, { Component } from "react";

import { Phonebook, Title, SubTitle, ContactBox } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  componentDidMount() {
    const localStorData = JSON.parse(localStorage.getItem("contacts"));

    if (localStorData) {
      this.setState({
        contacts: localStorData,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  formSubmitHandler = (data) => {
    !this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, data],
        }))
      : alert(` ${data.name} is alredy in the contacts list`);
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    // console.log(e);
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Title>Phonebook</Title>
        <Phonebook>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <ContactBox>
            <SubTitle>Contacts</SubTitle>
            <Filter value={filter} changeFilter={this.changeFilter} />
            <Contacts
              contacts={this.getFilteredContacts()}
              handleDeleteContact={this.handleDeleteContact}
            />
          </ContactBox>
        </Phonebook>
      </>
    );
  }
}
