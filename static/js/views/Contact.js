import AbstractView from '../lib/AbstractView.js'
import AppLayout from './layout/AppLayout.js'
import Config from '../config.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Settings')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    return `
      <h1>Contact</h1>
      <p>Send us an e-mail at ${Config.CONTACT_EMAIL}.</p>
    `
  }
}
