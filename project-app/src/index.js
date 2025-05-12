import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter,Link} from 'react-router-dom';
const root=ReactDOM.createRoot(
  document.getElementById('root'));

  root.render(
    <div>
      <BrowserRouter>
      <div>
        {/* <Link to={'/'}>HomePage </Link>  */}
        {/* <Link to={'/category'}>CategoryPage </Link>  */}
        {/* <Link to={'/login'}>LoginPage ||</Link> 
        <Link to={'/register'}>RegisterPage ||</Link>  */}
        <Link to={'/admin'} Admindashboard
></Link>         </div>
              <App></App>
              </BrowserRouter>
            </div>
          )