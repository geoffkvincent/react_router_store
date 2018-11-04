import React from 'react'
import axios from 'axios'

class Product extends React.Component {
  state = { product: [] }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`api/products/${id}`)
      .then ( res => this.setState({ product: res.data }) )
  }

  render () {
    return (
      null
    )
  }
}

export default Product