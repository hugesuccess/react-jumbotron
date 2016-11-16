import React, { Component } from 'react';
import { Link } from 'react-router'


import './jumbotron.css';

class Jumbotron extends Component {

  constructor(props, config) {
    super(props, config)

    this.renderButton = this.renderButton.bind(this)
  }

  renderButton() {
    if(!this.props.button) return false

    let { button } = this.props
    button.className = "btn btn-" + (this.props.button.type || "default")

    return (
      <Link
        to={button.url}>
        <button
          className={ button.className }>
            {button.text}
        </button>
      </Link>
    )
  }
  render() {
    let backgroundImage = this.props.backgroundImage || "3f4a8fc.jpg"
    let Img = require('../../../public/img/'+ backgroundImage)

    return (
      <div
        className="jumbotron"
        style={{backgroundImage: "url(" + Img +")"}}>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          {this.renderButton()}
      </div>
    );
  }
}

export default Jumbotron;
