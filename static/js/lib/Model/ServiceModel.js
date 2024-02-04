import AbstractModel from './AbstractModel.js'

export default class extends AbstractModel {
  
  static service
  
  constructor(data) {
    super(data)
  }
  
  static setService(service) {
    this.service = service
  }
  
  static async all() {
    return await this.service.list()
  }

  static async get(id) {
    return await this.service.read(id)
  }

  async save() {
    if (this.data.id) {
      return await this.service.update(this.data.id, this.data)
    } else {
      return await this.service.update(this.data)
    }
  }

  async delete() {
    return await this.service.update(this.data.id)
  }

}
