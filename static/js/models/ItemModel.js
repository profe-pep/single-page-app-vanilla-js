import ServiceModel from '../lib/Model/ServiceModel.js'
import ItemService from '../services/ItemService.js'

export default class extends ServiceModel {

  static service = ItemService

}
