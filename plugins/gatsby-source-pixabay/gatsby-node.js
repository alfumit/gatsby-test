const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

const fallbackImages = [
  { largeImageURL: 'https://pixabay.com/get/e83cb80f21f1083ed1584d05fb1d4796e175e0d21fb50c4090f4c07eaee8b2b8d0_1280.jpg',
  webformatHeight: 359,
  webformatWidth: 640,
  likes: 189,
  imageWidth: 2500,
  id: 1990959,
  user_id: 1409366,
  views: 31979,
  comments: 14,
  pageURL: 'https://pixabay.com/en/singapore-skyscrapers-city-1990959/',
  imageHeight: 1406,
  webformatURL: 'https://pixabay.com/get/e83cb80f21f1083ed1584d05fb1d4796e175e0d21fb50c4090f4c07eaee8b2b8d0_640.jpg',
  type: 'photo',
  previewHeight: 84,
  tags: 'singapore, skyscrapers, city',
  downloads: 13935,
  user: 'Walkerssk',
  favorites: 226,
  imageSize: 639211,
  previewWidth: 150,
  userImageURL: 'https://cdn.pixabay.com/user/2015/09/15/18-54-19-776_250x250.png',
  previewURL: 'https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_150.jpg' },
  { largeImageURL: 'https://pixabay.com/get/ea3cb90821f61c22d2524518b74d4694e175e5d31dac104491f1c670a2eab5b0_1280.jpg',
    webformatHeight: 423,
    webformatWidth: 640,
    likes: 185,
    imageWidth: 4749,
    id: 398792,
    user_id: 343004,
    views: 51058,
    comments: 18,
    pageURL: 'https://pixabay.com/en/kuala-lumpur-urban-night-building-modern-398792/',
    imageHeight: 3146,
    webformatURL: 'https://pixabay.com/get/ea3cb90821f61c22d2524518b74d4694e175e5d31dac104491f1c670a2eab5b0_640.jpg',
    type: 'photo',
    previewHeight: 99,
    tags: 'kuala lumpur urban night building modern skyscraper architecture cityscape futuristic black and white kuala lumpur building cityscape cityscape cityscape cityscape cityscape futuristic futuristic',
    downloads: 17514,
    user: 'zrylzizou',
    favorites: 245,
    imageSize: 1474491,
    previewWidth: 150,
    userImageURL: 'https://cdn.pixabay.com/user/2014/07/18/15-20-39-151_250x250.jpg',
    previewURL: 'https://cdn.pixabay.com/photo/2014/07/21/18/31/kuala-lumpur-398792_150.jpg' },
  { largeImageURL: 'https://pixabay.com/get/ea34b10820fd043ed1584d05fb1d4796e175e0d21fb50c4090f4c07eaee8b2b8d0_1280.jpg',
    webformatHeight: 320,
    webformatWidth: 640,
    likes: 52,
    imageWidth: 14400,
    id: 3107895,
    user_id: 6640276,
    views: 8236,
    comments: 4,
    pageURL: 'https://pixabay.com/en/panoramic-panorama-city-water-sky-3107895/',
    imageHeight: 7200,
    webformatURL: 'https://pixabay.com/get/ea34b10820fd043ed1584d05fb1d4796e175e0d21fb50c4090f4c07eaee8b2b8d0_640.jpg',
    type: 'photo',
    previewHeight: 75,
    tags: 'panoramic, panorama, city',
    downloads: 4763,
    user: 'Mad_Photography_Perth',
    favorites: 59,
    imageSize: 9085628,
    previewWidth: 150,
    userImageURL: 'https://cdn.pixabay.com/user/2018/01/26/06-12-41-511_250x250.jpg',
    previewURL: 'https://cdn.pixabay.com/photo/2018/01/26/06/06/panoramic-3107895_150.jpg' },
  { largeImageURL: 'https://pixabay.com/get/ee34b2082ff11c22d2524518b74d4694e175e5d31dac104491f1c670a2eab5b0_1280.jpg',
    webformatHeight: 426,
    webformatWidth: 640,
    likes: 55,
    imageWidth: 3072,
    id: 713775,
    user_id: 322497,
    views: 7819,
    comments: 7,
    pageURL: 'https://pixabay.com/en/city-big-city-skyscraper-skyscrapers-arc-713775/',
    imageHeight: 2048,
    webformatURL: 'https://pixabay.com/get/ee34b2082ff11c22d2524518b74d4694e175e5d31dac104491f1c670a2eab5b0_640.jpg',
    type: 'photo',
    previewHeight: 99,
    tags: 'city big city skyscraper skyscrapers architecture window skyline metropolis urban usa at night tram view glass facades district lights glass facade building sky modern apocalypse mystical fantastic tidal wave',
    downloads: 2700,
    user: 'Mysticsartdesign',
    favorites: 69,
    imageSize: 909286,
    previewWidth: 150,
    userImageURL: 'https://cdn.pixabay.com/user/2018/02/08/13-52-51-167_250x250.png',
    previewURL: 'https://cdn.pixabay.com/photo/2015/04/09/01/58/city-713775_150.jpg' }
]

const constructNode = (data, createNode, createNodeId) => {
  data.forEach(photo => {
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
}

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions;
  delete configOptions.plugins

  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://pixabay.com/api/?${apiOptions}`

  return (
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => constructNode(data.hits, createNode, createNodeId))
      .catch(() => constructNode(fallbackImages, createNode, createNodeId))
  )
}
