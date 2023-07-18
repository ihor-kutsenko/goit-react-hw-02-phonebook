import { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import dafaultContacts from './contacts.json';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: dafaultContacts,
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
          <Header title="Contacts" />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
