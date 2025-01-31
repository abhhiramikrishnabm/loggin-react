import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './Store';

import { Provider } from 'react-redux';
import Logg from './Logg';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Logg2 from './Logg2';
import { ThemeProvider } from './ThemeProvider';
import Memo from './useMemo';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>

             <Provider store={store}>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Logg/>}/>
  <Route path='/next' element={<Logg2/>}/>
  
</Routes>
</BrowserRouter>

    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
