import MemoryService from '../lib/Service/MemoryService.js'

export default class extends MemoryService {

  static collection = 
    [
      {
        "id": 1,
        "nom": "Bike",
        "store": {
          "id": 1,
          "nom": "Mercadona"
        },
        "unitats": 888
      },
      {
        "id": 2,
        "nom": "Skate",
        "store": {
          "id": 1,
          "nom": "Mercadona"
        },
        "unitats": 296
      },
      {
        "id": 3,
        "nom": "Surfskate",
        "store": {
          "id": 1,
          "nom": "Mercadona"
        },
        "unitats": 343
      },
      {
        "id": 4,
        "nom": "Banana",
        "store": {
          "id": 2,
          "nom": "Lidl"
        },
        "unitats": 15
      },
      {
        "id": 5,
        "nom": "Orange",
        "store": {
          "id": 2,
          "nom": "Lidl"
        },
        "unitats": 168
      },
      {
        "id": 6,
        "nom": "Apple",
        "store": {
          "id": 2,
          "nom": "Lidl"
        },
        "unitats": 214
      },
      {
        "id": 7,
        "nom": "Bacon",
        "store": {
          "id": 3,
          "nom": "Aldi"
        },
        "unitats": 589
      },
      {
        "id": 8,
        "nom": "Chicken",
        "store": {
          "id": 3,
          "nom": "Aldi"
        },
        "unitats": 250
      },
      {
        "id": 9,
        "nom": "Sausage",
        "store": {
          "id": 3,
          "nom": "Aldi"
        },
        "unitats": 538
      }
    ]

  static increment = 4
}
