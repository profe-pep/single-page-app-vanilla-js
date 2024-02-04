import { u } from './lib/Helpers.js'
import createRouter from './lib/Router.js'

import Home from './views/Home.js'
import StoresList from './views/stores/StoresList.js'
import StoreView from './views/stores/StoreView.js'
import ItemsList from './views/items/ItemsList.js'
import ItemView from './views/items/ItemView.js'
import Contact from './views/Contact.js'

const routes = [
  { path: u('/'), view: ItemsList /*Home*/ },
  { path: u('/stores'), view: StoresList },
  { path: u('/stores/:id'), view: StoreView },
  { path: u('/items'), view: ItemsList },
  { path: u('/items/:id'), view: ItemView },
  { path: u('/contact'), view: Contact }
]

export const router = createRouter('#app', routes)