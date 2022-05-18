import React from 'react'
import Product from './pages/product'

export default class App extends React.Component {
  render() {
    return(
      <>
        <h1>Dania Furniture Product Page</h1>
        <div className='container'>
          <Product />
        </div>
      </>
    )
  }
}
