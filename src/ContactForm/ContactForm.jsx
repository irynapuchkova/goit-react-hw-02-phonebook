import { Component } from "react"

import {Form, Input, Label, AddButton} from './ContactForm.styled';

 export default class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState(
      {
        [name]: value
      }
    );
  }
    
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: " ",
      number: " "
    });
  }

  render() {
    const { name, number } = this.state;

    return (
    <Form onSubmit={this.onSubmit}>
      <Label>Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          value = {name}
          onChange = {this.handleChange}
          />
      </Label>

      <Label>Number
        <Input 
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          value = {number}
          onChange = {this.handleChange}
        />
      </Label>

      <AddButton
        type='submit'
        >Add contact
      </AddButton>
    </Form>
  )}
}
