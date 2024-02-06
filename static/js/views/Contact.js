import AbstractView from '../lib/View/AbstractView.js'
import config from '../config.js'
import { router } from '../index.js'
import { u } from '../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Contact')
  }

  addEvents() {
    document.querySelector('#contact-form').addEventListener("submit", function(e){
      e.preventDefault()
      const data = new FormData(e.target);
      const obj = Object.fromEntries(data.entries())
      console.log(obj)
      alert(`Hola ${obj.name}!`)
    });
    document.querySelector('#contact-form').addEventListener("click", function (e) {
      e.preventDefault()
      console.log('Back to home')
      router.navigateTo(u('/'))
    })
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
        <button class="button button-cancel" type="reset" id="back">Back to home</button>
      <form>
    `
  }
}
