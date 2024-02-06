export default function createRouter(root, routes) {
  const pathToRegex = path =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')

  const getParams = match => {
    const values = match.result.slice(1)

    const keys = Array.from(
      match.route.path
        .matchAll(/:(\w+)/g))
      .map(result => result[1]
      )

    return Object.fromEntries(
      keys.map((key, i) => {
        return [
          key,
          values[i]
        ]
      })
    )
  }

  const navigateTo = url => {
    history.pushState(null, null, url)
    router()
  }

  const router = async () => {

    // Test each route for a potential match.
    const potentialMatches = routes.map(route => {
      return {
        route: route,
        result: location.pathname.match(pathToRegex(route.path))
      }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
      match = {
        route: routes[0],
        result: [
          location.pathname
        ]
      }
    }

    const view = new match.route.view(getParams(match))
    await view.render(root)
  }

  window.addEventListener('popstate', router)

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault()
        navigateTo(e.target.href)
      } else if (e.target.parentNode.tagName.toLowerCase() == 'a' && 
        e.target.parentNode.matches('[data-link]')) {
        // FIX links with image or span elements inside
        e.preventDefault()
        navigateTo(e.target.parentNode.href)
      }
    })

    router()
  })

  return {
    router: router,
    navigateTo: navigateTo
  }
}