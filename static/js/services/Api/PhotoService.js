import ApiService from '../../lib/Service/ApiService.js'
import config from '../../config.js'

export default class extends ApiService {

  static urlEndpoint = config.API_URL_ENDPOINT
  static resource = 'photos'

  static factory() {
    return  {
      "albumId": 0,
      "id": 0,
      "title": "",
      "url": "",
      "thumbnailUrl": ""
    }
  }
}