import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import routes from './routes';

render(
  <div>
    {routes}
  </div>,
  document.getElementById('root')
);

// ReactDOM.render(<Routes />, document.querySelector('.app'));

