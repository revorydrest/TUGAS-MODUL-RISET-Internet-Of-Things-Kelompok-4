import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import img1 from '../FotoAnggota/Kevin.png';
import img2 from '../FotoAnggota/Raihan.png';
import img3 from '../FotoAnggota/Alya.png';
import img4 from '../FotoAnggota/Mitchel.png';
import "./Prpil.css";

function Profile() {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#profile") {
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, []);

    return (
        <div id="profile">
            <h1 className="team-title">Grup Profile</h1>
            <div className="team-members">
                <div className="team-member" onClick={() => setOpenModal1(true)}>
                    <img src={img1} alt="Kevin"/>
                    <p>Kevin Mahardika Zebua</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal2(true)}>
                    <img src={img2} alt="Raihan" />
                    <p>Raihan Ramadan Setiawan</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal3(true)}>
                    <img src={img3} alt="Alya" />
                    <p>Alya Mafira</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal4(true)}>
                    <img src={img4} alt="Mitchel" />
                    <p>Mitchel Mohamad Affandi</p>
                </div>
            </div>

            <Modal open={openModal1} onClose={() => setOpenModal1(false)} center>
                <h2>Kevin Mahardika Zebua</h2>
                <p className="duar">
                    1101223101
                    </p>
                <p className="duar">
                    TT-46-11
                    </p>
                <p className="duar">
                    IG : @kengpvin
                    </p>
            </Modal>

            <Modal open={openModal2} onClose={() => setOpenModal2(false)} center>
                <h2>Raihan Ramadan Setiawan</h2>              
                <p className="duar">
                    1101223012
                    </p>
                <p className="duar">
                    TT-46-11
                    </p>
                <p className="duar">
                    IG : @raihanrrtwn
                    </p>
            </Modal>

            <Modal open={openModal3} onClose={() => setOpenModal3(false)} center>
                <h2>Alya Mafira</h2>
                <p className="duar">
                    1101223240
                    </p>
                <p className="duar">
                    TT-46-08
                    </p>
                <p className="duar">
                   IG : @alyamafira_

                    </p>
            </Modal>

            <Modal open={openModal4} onClose={() => setOpenModal4(false)} center>
                <h2>Mitchel Mohamad Affandil</h2>
                <p className="duar">
                101012340132
                </p>
                <p className="duar">
                    TT-47-INT
                    </p>
                <p className="duar">
                   IG : @mtchffnd

                    </p>
            </Modal>
        </div>
    );
}

export default Profile;
