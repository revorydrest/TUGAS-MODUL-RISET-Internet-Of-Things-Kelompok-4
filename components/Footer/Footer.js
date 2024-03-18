import React from "react";
import "./Footer.css";
import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>kelompok 4 Cyber Recruitment 2024 </span>
                </div>
                <a
                    href="https://github.com/revorydrest/Tugas-Modul-Riset-Kelompok-4-Cyber-Recruitment-2024"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.instagram.com/cpslaboratory/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://lms.cpsrg.org/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;