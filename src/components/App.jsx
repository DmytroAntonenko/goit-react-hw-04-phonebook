import React, {useState, useEffect} from "react";
import shortid from 'shortid';
import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';


// const App =() => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState("");
  

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     window.localStorage.setItem( 'contacts', JSON.stringify(parsedContacts) ) 
//   }, [contacts]);

 

  const App = () => {
    const [contacts, setContacts] = useState(() => {
      return (
        JSON.parse(window.localStorage.getItem("savedContacts")) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
      );
    });
    const [filter, setFilter] = useState("");
  

    useEffect(() => {
      window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
    }, [contacts]);

    
  
    const changeFilter = event => {
      setFilter(event.currentTarget.value );
    };
        
    const addContact = ({ name, number }) => {
      const isExistContact = contacts.find((contact) => name === contact.name);
      if (isExistContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
      const contact = {
        id: shortid.generate(),
        name,
        number
      };
      setContacts(prevContacts => [contact, ...contacts]); 
    };
  
    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    };
  
    const deleteContact = contactId => {
      setContacts(prevContacts => 
        prevContacts.filter(({ id }) => id !== contactId),
      );
    };
  
  return (
    <div
      style={{
      border: '1px solid black',
      borderRadius: '4px',
      maxWidth: '320px',
      margin: 'auto',
      padding: '12px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </div>
  )}


export default App;
