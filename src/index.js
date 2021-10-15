import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './route';
import './i18n';

ReactDOM.render(

  <React.StrictMode>

  <Suspense fallback="loading...">

  <Route/>

  </Suspense>

  </React.StrictMode>,
  
  document.getElementById('root')

);


