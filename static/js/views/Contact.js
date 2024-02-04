import AbstractView from '../lib/AbstractView.js'
import AppLayout from './layout/AppLayout.js'
import config from '../config.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Contact')
    this.setLayout(AppLayout, 'app-content')    
  }

  addEvents() {
    document.querySelector('#contact-form').addEventListener("submit", function(e){
      e.preventDefault()
      const data = new FormData(e.target);
      const obj = Object.fromEntries(data.entries())
      console.log(obj)
      alert(`Hola ${obj.name}!`)
    });
  }

  async getHtml() {
    return `
      <h1>Contact</h1>
      <p>Fill the form or send us an e-mail at ${config.CONTACT_EMAIL}.</p>
      <form id="contact-form" action="#">
        <input class="input" type="text" name="name" placeholder="Your name" required />
        <input class="input" type="email" name="email" placeholder="Your e-mail" required />
        <textarea class="input" name="message" placeholder="Your message" required></textarea>
        <button class="button" type="submit">Send</button>
      <form>
    `
  }
}
