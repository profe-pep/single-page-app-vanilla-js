import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    const { id } = params;
    this.postID = id;
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    return `
        <h1>Post</h1>
        <p>You are viewing post #${this.postID}. No content can be shown here yet.</p>
    `;
  }
}
