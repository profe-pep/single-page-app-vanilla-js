import { u } from './lib/Helpers.js'
import createRouter from './lib/Router.js'

import Home from './views/Home.js'
import AlbumList from './views/albums/AlbumList.js'
import AlbumView from './views/albums/AlbumView.js'
import PhotoList from './views/photos/PhotoList.js'
import PhotoView from './views/photos/PhotoView.js'
import UserView from './views/users/UserView.js'
import Contact from './views/Contact.js'

const routes = [
  { path: u('/'), view: Home },
  { path: u('/albums'), view: AlbumList },
  { path: u('/albums/:id'), view: AlbumView },
  { path: u('/photos'), view: PhotoList },
  { path: u('/photos/:id'), view: PhotoView },
  { path: u('/users/:id'), view: UserView },
  { path: u('/contact'), view: Contact }
]

export const router = createRouter('#app', routes)