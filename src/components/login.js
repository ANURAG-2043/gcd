
import React from 'react';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



function Login() {
  return (
  <>
            <div className='container' style={{width: 500}}>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
               <hr className="my-4" />
              <br></br>
              <Button className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }} href="#/googleSignin">
              <FontAwesomeIcon icon={faGoogle} className="mx-2" />
                Sign in with Google
              </Button>
              <Button className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }} href="#/facebookSignin">
              <FontAwesomeIcon icon={faFacebook} className="mx-2" />
                Sign in with Facebook
              </Button>
              </div>
              </>     
  );
}

export default Login;
