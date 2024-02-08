// import {GoogleLogin} from 'react-google-login';

// const clientId = "385346956852-la1fnkoibb8ehlt263abo1p94ffrf49j.apps.googleusercontent.com";
// function Login(){

//     const onSuccess = (res) => {
//         console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
//     }

//     const onFailure = (res) => {
//         console.log("LOGIN FAILED! res: ", res);
//     }
//     return (
//         <div id="signInButton">
//             <GoogleLogin
//             clientId={clientId}
//             buttonText="Login"
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//             cookiePolicy={'single_host_origin'}
//             isSignedIn={true}
//             />
//         </div>
//     )
// }
// export default Login;

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
              <MDBBtn size='lg'>Login</MDBBtn>
              <hr className="my-4" />
              <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with Google
              </MDBBtn>
              {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with Facebook
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
