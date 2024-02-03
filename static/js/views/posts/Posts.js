import AbstractView from '../../lib/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Posts')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    // This is hardcoded for now but could be done dynamically using templating
    // and maybe some posts in a posts folder.
    return `
      <h1>Posts</h1>
      <ul>
        <li>
          <a href="${u('/posts/1')}" data-link>#1 - How to build a Node.js app</a>
        </li>
        <li>
          <a href="${u('/posts/2')}" data-link>#2 - How to build a GH Pages site</a>
        </li>
      </ul>
    `
  }
}
