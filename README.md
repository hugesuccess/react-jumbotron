# react-jumbotron

React Jumbotron component

Creates a Bootstrap Jumbotron component with dynamic text and dynamic background image. Will ignore any properties not assigned.


### Usage

```
import React, { Component } from 'react'
import Jumbotron from './path/to/ReactJumbotron'

class Foo extends Component {
    render() {
        //Example configs
        let configs = {
            "title": "Foo!",
            "backgroundImage": "path/to/img",
            "text": "This is Foo!",
            "button": {
              "type": "danger", // http://getbootstrap.com/css/#buttons-options
               "text": "Learn More",
              "url": "/contact"
            }
         }
        return (
            <Jumbotron { ...configs } />
        )
    }
}
