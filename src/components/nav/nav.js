import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faUser } from '@fortawesome/free-solid-svg-icons'; // Adjust the icon import based on your needs
import './nav.css';
import { useAuth0 } from "@auth0/auth0-react";


function Dropdown({ isOpen, toggleDropdown }) {
    return (
        <div>
            <button onClick={toggleDropdown}>—— Products ——</button>
            // {isOpen && (
            //     <div>
            //         <li><a href='#'>— Free Edition —</a></li>
            //         <li><a href='#'>— Paid Edition —</a></li>
            //     </div>
            // )}
        </div>
    );
}

function Navbar() {
    
    
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading} = useAuth0();

    const [isProductsOpen, setProductsOpen] = useState(false);

    const toggleProductsDropdown = () => {
        setProductsOpen(!isProductsOpen);
    };

    if (isLoading) {
        return <div>Loading ...</div>;
      }

    return (
        <>
            <div>
                <section className='nav'>
                    <div className='Navbar'>
                        <div className='logo1'>
                            <a href='#'><img
                                src={logo}
                                alt="Logo"
                                style={{ width: '140px', height: '100px' }}
                            />GeoCityDatabase</a>
                        </div>
                        <div className='navb'>
                            <ul className='list' >
                                <li><a href='#'>—— Home ——</a></li>
                                <li>
                                    <Dropdown isOpen={isProductsOpen} toggleDropdown={toggleProductsDropdown} />
                                </li>
                                
                                    {isAuthenticated && (
                                        <li>
                                       <>
                                       <h5 style={{ color: 'white', padding: 0, marginTop: 0 }}>Welcome,</h5>
                                       <p style={{ textAlign: 'center', color: 'white',marginTop: 0,marginBottom: 0,padding: 0,fontSize:20 }}>{user.name}</p>
                                     </>
                                     </li>
                                    )}
                                
                            { isAuthenticated ? (
                            <li>
                             <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                 Log Out
                             </button>
                             </li>
                             ) :(
                                <li>
                                     <button className='register' onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                             )}
                             </ul>
                           
                           
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Navbar;
