import React from 'react';
import './home.css';
import img1 from '../../images/top.png';  // Adjust the path based on your project structure
import img2 from '../../images/1.png';
import img3 from '../../images/2.png';
import img4 from '../../images/3.png';
import { useAuth0 } from "@auth0/auth0-react";




const Home = () => {

    const {isAuthenticated} = useAuth0();
    return (
        <div>
        <section className='sec1'>
            <div className='image'>
                <img src={img1} alt='' className='img1' />
                <p>Get your required<br/>
                    GeoCityDatabase<br/>today!!<br/>
                    <a href='#'><button className='btn1'>—— GEOCITYDATABASE ——</button></a>
                </p>
                
            </div>
        </section>
        <section className='info'>
        <p className='head1'>
            GeoCityDatabase
        </p>
        <p className='para'> Our platform offers an online download option for a comprehensive city characteristics database, providing access to information on various nations and regions. The database includes feature names, latitude and longitude coordinates, and other relevant data, It is an excellent resource for academics, analysts, and others seeking accurate and current information on cities worldwide.
The platform simplifies access to and use of this valuable material, supporting wise judgment and smart studies in various sectors.
        </p>
        </section>
        <section className='featured_products'>
            <p className='featured_products'>
                FEATURED PRODUCTS
            </p>

            {isAuthenticated ?(
                <li><a href='#'><button className='free' >Download Free Version</button></a></li>
            ):(
                <h2 style={{ paddingTop: '20px' }}>Please Login first...!!!</h2>
              )}
            
        </section>
        <section className='products'>
            <p className='about'>
                ABOUT US
            </p>
            <div className='card-container'>
                <div className='card 1'>
                    <img className='images 1' src={img2} alt=''/>
                    <h2>What is Geo City Database?</h2>
                    <p>A large database with more than 4 million city characteristics can easily downloaded from GeoCityDatabase.com. These databases include thorough information that includes feature names, latitude and longitude coordinates, information about the region and the nation, as well as other pertinent data. This collection contains a wide range of city data and spans 252 nations or territories. Our platform allows users to quickly access and download this priceless resource, providing them with substantial information for a variety of tasks including study, analysis, and exploration.
</p>
                </div>
                <div className='card 2'>
                    <img className='images 2' src={img3} alt=''/>
                    <h2>Why GeoCityDatabase?</h2>
                    <p>Complete and accurate world major cities database source. We update the data source every month to make sure your have the up-to-date information for your usage. Compatible with Major Database Systems
                        The database is available in ASCII text (TSV) format and can be easily imported into any relational database, such as SQL Server, Oracle, Access, MySQL, Postgre and any other database system in use today. This database can also be loaded into NoSQL for queries.</p>
                </div>
                <div className='card 3'>
                    <img className='images img-4' src={img4} alt=''/>
                    <h2>Free Support</h2>
                    <p>GeoCityDatabase.com provides free email support for all subscribers.</p>
                </div>
            </div>
        </section>

        <section className='contact'>
            <p className='contactDetails'>
                CONTACT US
            </p>
        <div class="contactform">
            <p>𝕘𝕖𝕠𝕔𝕚𝕥𝕪𝕕𝕒𝕥𝕒𝕓𝕒𝕤𝕖@𝕘𝕞𝕒𝕚𝕝.𝕔𝕠𝕞</p>
      
        </div>
        <div className='details-others'>
            <p><b>www.GeoCityDatabase.com</b></p>
            <p>We love our customer, so feel free to contact us</p>
        </div>
        <div className='last'>
        <p><b>GeoCityDatabase</b></p>
        </div>
        </section>

        <section className='footer'>
        <p><b>GeoCityDatabase</b></p>
        <p>MUMBAI, INDIA</p>
        {/* <p className='mob'>+91 ##########</p> */}
        <p>COPYRIGHT © 2024 GEOCITYDATABASE - ALL RIGHT RESERVED.</p>
        </section>
        </div>
    );
};

export default Home;