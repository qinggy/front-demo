### render 可以直接从 react-dom 中解构出来

> eg:  当然还可以使用 **`` import ReactDOM from 'react-dom' ReactDOM.render() ``** 来处理


```js
import React from 'react';
import {render} from 'react-dom';
import App from './modules/app';

render(<App/>, document.getElementById('app'));
```