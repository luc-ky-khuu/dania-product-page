import React from 'react';

const product = {
  "productName": "Leather Sofa",
  "variants": [
    {
      "sku": "A01*Leather-Purple",
      "title": "Purple",
      "price": 699,
      "assembly": true,
      "color": "Purple",
      "colorHex": "#A020F0",
      "details": [
        "On sale!",
        "Faux Leather",
        "Non-allergenic dye"
      ],
      "inventory": {
        "caliWarehouse": 0,
        "otherWarehouse": 17
      }
    },
    {
      "sku": "A01*Leather-Green",
      "title": "Green",
      "price": 799,
      "assembly": true,
      "color": "Green",
      "colorHex": "#A26580F",
      "details": [
        "Top Grain Leather",
        "Non-allergenic dye"
      ],
      "inventory": {
        "caliWarehouse": 18,
        "otherWarehouse": 14
      }
    },
    {
      "sku": "A01*Leather-Brown",
      "title": "Brown",
      "price": 799,
      "color": "Brown",
      "colorHex": "#964B00",
      "details": [
        "Top Grain Leather"
      ],
      "inventory": {
        "caliWarehouse": 4,
        "otherWarehouse": 0
      }
    },
    {
      "sku": "A01*Leather-Red",
      "title": "Red",
      "price": 799,
      "assembly": true,
      "color": "Red",
      "colorHex": "#800000",
      "details": [
        "Top Grain Leather",
        "Prop 65: Lead Warning"
      ],
      "inventory": {
        "caliWarehouse": 1,
        "otherWarehouse": 7
      }
    },
    {
      "sku": "A01*Leather-Black",
      "title": "Black",
      "price": 899,
      "assembly": true,
      "color": "Black",
      "colorHex": "#000000",
      "details": [
        "Synthetic Leather"
      ],
      "inventory": {
        "caliWarehouse": 2,
        "otherWarehouse": 8
      }
    }
  ]
};
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: null,
      product: null,
      variant: null
    }
  }

  componentDidMount() {
    // fetch('/')
    // .then(response => response.json())
    // .then(result => this.setState({
    //   product: result
    // }))
    this.setState({
      product: product,
      variant: 0
    })
  }

  render() {
    const { product, variant } = this.state
    return (
      <div className='row'>
        <div className='col-8'>
          <img src='https://cdn.shopify.com/s/files/1/1921/1117/products/P16_19-2660-3_BE_upd_2_5000x.jpg?v=1628331535'></img>
        </div>
        <div className="col-8">
          <h1>{product ? product.productName : 'product not found'}</h1>
          <h3>{product && product.variants[variant].title}</h3>
        </div>
      </div>
    )
  }
}
