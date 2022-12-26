import { Component } from 'react';
import shortid from 'shortid';

import css from './ContactForm.module.css';

class ContactForm extends Component  {
    state = {
      name: '',
      number: '',
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
      const {name, value} = event.currentTarget;
      this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
      };

render() {
  const { name, number } = this.state;
    return(
        <form onSubmit={this.handleSubmit}>
      <label className={css.form__label} htmlFor={this.nameInputId}>
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
      </label>
      <label className={css.form__label} htmlFor={this.numberInputId}>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
          id={this.numberInputId}
        />
      </label>
      <button type="submit">Add contact</button>
      
     </form>
    )
};
}

export default ContactForm;