const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/src/pages/index.js"))),
  "component---src-pages-practitioners-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/src/pages/practitioners.js"))),
  "component---src-pages-therapies-js": hot(preferDefault(require("/Users/danielcooper/Documents/Development/Client Projects/03 - Omroom/omroom/src/pages/therapies.js")))
}

