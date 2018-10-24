const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions;
  delete configOptions.plugins

  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://pixabay.com/api/?${apiOptions}`

  return (
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        data.hits.forEach(photo => {
          createNode({
            ...photo,
            id: createNodeId(`pixabay-photo-${photo.id}`),
            parent: null,
            children: [],
            internal: {
              type: 'PixabayPhoto',
              content: JSON.stringify(photo),
              contentDigest: crypto
              .createHash('md5')
              .update(JSON.stringify(photo))
              .digest('hex')
            }
          });
        })
      })
  )
}
