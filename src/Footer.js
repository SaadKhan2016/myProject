import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faGoogle,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHome, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'


let Footer =() => {
    return(
        <div>


            {/* <!-- Footer --> */}
            <footer className="page-footer font-small unique-color-dark" style={{backgroundColor: "#3E4551", color:"white"}}>
            
            <div>
                <div className="container-fluid"  style={{backgroundColor: "#6351ce"}}>

                {/* <!-- Grid row--> */}
                <div className="row py-4 d-flex align-items-center">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-6 col-lg-7 text-center text-md-right">

                    {/* <!-- Facebook --> */}
                    <a className="fb-ic"  href="https://www.facebook.com/">
                        <i className="white-text mr-4" ><FontAwesomeIcon icon={faFacebook} /></i>
                    </a>
                    {/* <!-- Twitter --> */}
                    <a className="tw-ic" href="https://twitter.com/explore"> 
                        <i className="white-text mr-4"><FontAwesomeIcon icon={faTwitter} /></i>
                    </a>
                    {/* <!-- Google +--> */}
                    <a className="gplus-ic" href="https://www.google.com/">
                        <i className="white-text mr-4"><FontAwesomeIcon icon={faGoogle} /></i>                        
                    </a>
                    {/* <!--Linkedin --> */}
                    <a className="li-ic" href="https://www.linkedin.com/">
                    <i className="white-text mr-4"><FontAwesomeIcon icon={faLinkedin} /></i>                        
                    </a>
                    {/* <!--Instagram--> */}
                    <a className="ins-ic" href="https://www.instagram.com/">
                        <i className="white-text"><FontAwesomeIcon icon={faInstagram} /></i>                       
                    </a>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row--> */}

                </div>
            </div>

            {/* <!-- Footer Links --> */}
            <div className="container text-center text-md-left mt-5">

                {/* <!-- Grid row --> */}
                <div className="row mt-3">

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    {/* <!-- Content --> */}
                    <h6 className="text-uppercase font-weight-bold">Sid Corp</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" styles="width: 60px;" />
                    <p>I am recently Graduated from SSUET in BS Computer Engineering and I have standing of React Js,JavaScript,
                        and Objected Oreinted Programming and extensive experience in both frontend
                        and backend technologies.</p>

                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" styles="width: 60px;"/>
                    <p>
                    <a href="#!">Deep Learning Project</a>
                    </p>
                    <p>
                    <a href="#!">Spring Boot Crud</a>
                    </p>
                    <p>
                    <a href="#!">Angular Theme</a>
                    </p>
                    <p>
                    <a href="#!">React Theme</a>
                    </p>

                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" styles="width: 60px;" />
                    <p>
                    <i className="mr-3"><FontAwesomeIcon icon={faHome} /></i> Karachi,Pakistan</p>                  
                    <p>
                    <i className="mr-3"><FontAwesomeIcon icon={faEnvelope} /></i> saadalikhan1996@gmail.com</p>
                    <p>
                    <i className="mr-3"><FontAwesomeIcon icon={faPhone} /></i>0320-0807494</p>
                    <p>
                    <i className="mr-3"><FontAwesomeIcon icon={faHome} /></i>--------</p>

                </div>
                {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
             <div className="footer-copyright text-center py-3">© 2020 Copyright:
                 <a href="https://alprogram.com/"> Saada2016</a>
             </div>
            {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}



        </div>
    )
}

export default Footer;