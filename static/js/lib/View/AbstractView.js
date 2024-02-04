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

  addEvents() {

  }
  
  async getHtml() {
    return ''
  }

  async render(root) {
    let template = this.layout ? this.layout : this
    document.querySelector(root).innerHTML = await template.getHtml()
    template.addEvents()
    // Save last root selector to allow view refresh
    this.root = root
  }

  async refresh() {
    await this.render(this.root)
  }
}