import AbstractView from '../../lib/AbstractView.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
  }
  
  async getHtml() {
    return `
      <p>Problems? Suggestions? <a href="${u('/contact')}" data-link>Contact us</a>.</p>
    `
  }
}
