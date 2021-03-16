import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div>
            <section>
                <div className="footer">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col text-center text-white">
                                <em>“Work hard in silence, let your success be your noise”</em>
                                <p>Frank Ocean
                        </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center pb-3">
                                <div className="circle-footer">
                                    <a href="https://www.facebook.com/Nahid2194"> <FontAwesomeIcon icon={faFacebookF} /></a>

                                </div>
                                <div className="circle-footer">
                                    <a href="https://www.instagram.com/nahid_jc/"> <FontAwesomeIcon icon={faLinkedin} /></a>

                                </div>
                                <div className="circle-footer">
                                    <a href="https://github.com/Nahid2194"> <FontAwesomeIcon icon={faGithub} /></a>

                                </div>
                                <div className="circle-footer">
                                    <a href="https://www.linkedin.com/in/nahid-hasan-785717169/"><FontAwesomeIcon icon={faInstagram} /></a>

                                </div>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div class="col text-center text-white">
                                <p>&copy;All Rights Reserved by Nahid Hasan.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;