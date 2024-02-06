import AbstractView from '../lib/View/AbstractView.js'
import AppLayout from './layout/AppLayout.js'
import { u } from '../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Home')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    return `
        <h1>Home</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <a href="${u('/photos')}" data-link>View recent photos</a>.
        </p>    `
  }
}
