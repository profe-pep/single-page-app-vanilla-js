import ApiService from '../../lib/Service/ApiService.js'
import config from '../../config.js'

export default class extends ApiService {

  static urlEndpoint = config.API_URL_ENDPOINT
  static resource = 'albums'

  static factory() {
    return {
      "userId": 0,
      "id": 0,
      "title": ""
    }
  }
}