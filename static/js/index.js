import { u } from './lib/Helpers.js'
import createRouter from './lib/Router.js'

import Home from './views/Home.js'
import Posts from './views/posts/Posts.js'
import PostView from './views/posts/PostView.js'
import Contact from './views/Contact.js'

const routes = [
  { path: u('/'), view: Home },
  { path: u('/posts'), view: Posts },
  { path: u('/posts/:id'), view: PostView },
  { path: u('/contact'), view: Contact }
]

export const router = createRouter('#app', routes)