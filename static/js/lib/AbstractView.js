export default class {
  constructor(params) {
    this.params = params
  }

  setTitle(title) {
    document.title = title
  }

  setLayout(layout, sectionId) {
    this.layout = new layout()
    this.layout.addViewToSection(this, sectionId)
  }

  async getHtml() {
    return ''
  }

  async render(root) {
    let base = this.layout ? this.layout : this
    document.querySelector(root).innerHTML = await base.getHtml()
  }
}