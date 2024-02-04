export default class {

  constructor(data) {
    this.data = data
  }
  
  static async all() {
    return []
  }

  static async get(id) {
    return {}
  }

  async save() {
    return true
  }

  async delete() {
    return true
  }

}