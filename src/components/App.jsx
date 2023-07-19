import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from './NotifyOptions/NotifyOptions';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import dafaultContacts from './contacts.json';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: dafaultContacts,
    filter: '',
  };

  addContact = newContact => {
    const includesContact = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length;

    if (includesContact) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        notifyOptions
      );
    } else {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
      toast.success(
        `${newContact.name} was successfully added to your contacts`,
        notifyOptions
      );
    }
  };

  searchFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.searchFilter} />
          <ContactList contacts={filteredContact} />
        </Section>
        <ToastContainer />
      </div>
    );
  }
}
