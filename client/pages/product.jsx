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
      zipcode: '',
      product: null,
      variant: null
    }
    this.makeColorBoxes = this.makeColorBoxes.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkZip = this.checkZip.bind(this);
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

  changeColor(index) {
    this.setState({
      variant: index
    })
  }

  makeColorBoxes() {
    return (
      product.variants.map((item, index) => {
        const { product, variant } = this.state;
        let bg = product.variants[index].colorHex;
        let border = 'color-box-border'
        if (product.variants[index].colorHex.length > 7) {
          bg = product.variants[index].color;
        }
        if (variant === index) {
          border = 'color-box-border selected-box'
        }
        return (
          <a key={index} onClick={() => this.changeColor(index)}>
            <div className={border}>
              <div className='color-box' style={{ backgroundColor: bg }}>
              </div>
            </div>
          </a>
        )
      })
    )

  }

  showDetails() {
    const { product, variant } = this.state
    return (
      product.variants[variant].details.map((detail, index) => {
        return (
          <li key={index}>
            {detail}
          </li>
        )
      })
    )
  }

  handleChange(event) {
    const numbers = /[0-9\b]/g;
    const input = event.target.value;
    if ((input.match(numbers) || !input) && input.length <= 5) {
      this.setState({
        zipcode: input
      })
    }
  }

  checkZip(event) {
    event.preventDefault();
    console.log(this.state.zipcode)
    this.setState({
      zipcode: ''
    })
  }

  render() {
    const { product, variant, zipcode } = this.state
    if (!product) {
      return(
        <div>
        </div>
      )
    } else {
      return (
        <div className='row'>
          <div className='col-8'>
            <img src='https://cdn.shopify.com/s/files/1/1921/1117/products/P16_19-2660-3_BE_upd_2_5000x.jpg?v=1628331535'></img>
          </div>
          <div className="col-4 width-100">
            <h1 className='m-0'>{product.productName}</h1>
            <h3 className='muted-text'>{product.variants[variant].title}</h3>
            <hr></hr>
            <h2 className='m-0 fs-3'>${product.variants[variant].price}</h2>
            <div>
              <ul>
                {this.showDetails()}
              </ul>
              {product.variants[variant].assembly && <p className='italic'>* Assembly required</p>}
            </div>
            <div>
              <form onSubmit={this.checkZip} action="submit">
                <input type="text" placeholder='Enter zip code' value={zipcode} onChange={this.handleChange}/>
                <button type="submit">Check Availability</button>
              </form>
            </div>
            <div className='row mt-1'>
              {this.makeColorBoxes()}
            </div>
          </div>
        </div>
      )
    }
  }
}
