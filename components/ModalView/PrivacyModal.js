import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./PrivacyModal.css";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p className="lorem">
            Selamat datang di halaman "About Us"! Kami adalah tim yang tengah mengembangkan sebuah sistem yaitu “The Guardian of The Clothes”, sebuah solusi inovatif terbaru dalam perlindungan pakaian saat dijemur di luar ruangan. Kami percaya bahwa alat ini adalah sebuah kunci untuk mencegah terlupakannya pakaian yang sudah dijemur dan mencegah adanya tindakan criminal seperti pencurian. dan itulah sebabnya kami menciptakan teknologi yang dapat memberikan peringatan awal dengan cepat dan akurat.
Tim kami beranggotakan empat orang yakni. Raihan Ramadhan Setiawan, Alya Mafira, Kevin Mahardika Zebua, dan Mitchel Mohamad Affandi.  Bersama-sama, kami membuat “The Guardian of The Clothes”, sebagai sistem untuk pendeteksi hujan dan kemalingan yang digagas ide kombinasi sensor PIR dan Raindrop.
Terima kasih telah mengunjungi halaman "About Us" kami. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami. Kami sangat berharap alat yang kami buat dapat bermanfaat dalam berkontribusi untuk meningkatkan keselamatan.

        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                About Us
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Kelompok 4</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;