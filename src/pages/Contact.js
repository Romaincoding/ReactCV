import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Ile de France</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0651102588">
                                    <span className="clickInput" onClick={() => {
                                        alert('Numéro copié!');
                                    }}>
                                        0651102588
                                    </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="romaindupuis.pro@gmail.com">
                                    <span className="clickInput" onClick={() => {
                                        alert('E-mail copié!');
                                    }}>
                                        romaindupuis.pro@gmail.com
                                    </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>

                        <a href="https://www.linkedin.com/in/romain-dupuis-966344178/" target="_blank"
                           rel="noopener"><i className="fab fa-linkedin"></i></a>


                        <a href="https://github.com/Romaincoding" target="_blank"
                           rel="noopener"><i className="fab fa-github"></i></a>


                        <a href="http://www.google.com" target="_blank"
                           rel="noopener"><i className="fab fa-twitter"></i></a>


                        <a href="http://www.google.com" target="_blank"
                           rel="noopener"><i className="fab fa-codepen"></i></a>

                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Contact;