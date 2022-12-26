import ProtoTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.contact__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contact__item}>
        <ContactItem name={name} number={number} id={id} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: ProtoTypes.array.isRequired,
};

export default ContactList;