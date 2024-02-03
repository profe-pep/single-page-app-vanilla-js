import AbstractView from '../../lib/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.postID = params.id
    this.setTitle('Viewing Post')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    return `
        <h1>Post</h1>
        <p>You are viewing post #${this.postID}. No content can be shown here yet.</p>
    `
  }
}
