'use strict'

import Title from './app'

var React = require('react')
var ReactDOM = require('react-dom')


ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)