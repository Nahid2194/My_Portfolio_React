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

                                <em >
                                    “Whoever ascribes to me what I have not said then let him occupy his seat in Hell-fire! ”
                                </em>
                                <p>Sahih al-Bukhari </p>
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
                                    <a href="https://github.com/Nahidjc"> <FontAwesomeIcon icon={faGithub} /></a>

                                </div>
                                <div className="circle-footer">
                                    <a href="https://www.linkedin.com/in/nahidjc"><FontAwesomeIcon icon={faInstagram} /></a>

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