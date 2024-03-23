import React from 'react';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/nav/nav'
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import { Auth0Provider } from '@auth0/auth0-react';



const clientId ="385346956852-la1fnkoibb8ehlt263abo1p94ffrf49j.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2',start);
  });

  return (
    
          <Auth0Provider
          domain="dev-50ck150zubvjchf2.us.auth0.com"
          clientId="yuVNbZlL2YQbIiCG8cqZ9pnPIuskf36W"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}>

          <Navbar/>
          <Home />
          
          </Auth0Provider>

    
  );
}

export default App;
