'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./create-class')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)