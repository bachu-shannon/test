import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RootStore } from "./stores";
import App from './view/App';
import './styles/app.css';

// Debugging tools
import makeInspectable from 'mobx-devtools-mst';

makeInspectable(RootStore);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={RootStore}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
