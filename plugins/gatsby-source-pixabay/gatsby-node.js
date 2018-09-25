const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
  const createNode = actions
  delete configOptions.plugins
  console.log('Testing ma plug', configOptions)

  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://pixabay.com/api/?${apiOptions}`

  return (
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        data.hits.forEach(photo => {
          console.log('Photo data is', photo)
        })
      })
  )
}
