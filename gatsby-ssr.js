/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it.


import React from "react"
import { Provider } from 'react-redux'
import { globalStore } from './src/components/layout-components/redux-store'

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={globalStore}>
      {element}
    </Provider>
  )
}
