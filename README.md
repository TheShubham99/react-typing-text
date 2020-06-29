# react-typing-text

> **A simple react package for typing text effect with basic properties**

[![NPM](https://img.shields.io/npm/v/react-typing-text.svg)](https://www.npmjs.com/package/react-typing-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## In Action

![Screenshot 1](https://raw.githubusercontent.com/TheShubham99/react-typing-text/master/demo.gif)

## Install

```bash
npm install --save react-typing-text
```

## Usage

```jsx
import React, { Component } from 'react'

import TypeText from 'react-typing-text'
import 'react-typing-text/dist/index.css'

class Example extends Component {
  render() {
    return <TypeText text='Example Text 😄' />
  }
}
```

### Options -

- ✔️ `speed`: `Number` Typing speed. (value: lower value types faster)
- ✔️ `staticText`: `String`. Static Text which will be constant. (`$` in above demo)
- ✔️ `typingDelay`: `Number`.Time to wait before starting to type.

## License

MIT © [TheShubham99](https://github.com/TheShubham99)
