// TeamProfile.js

import React from 'react';
import img1 from './images/tlr.jpg';

function Introduction() {
  return (
    <div className="team-profile">
      <div className="team-member">
            <h1>
                KELOMPOK 4
            </h1>
        <img src={img1} alt="Haikal" />
        <p>Muhammad Haikal Anwarl</p>
      </div>
      <div className="team-member">
        <img src={img1} alt="Rafa" />
        <p></p>
      </div>
      <div className="team-member">
        <img src={img1} alt="Alika" />
        <p>Efgh</p>
      </div>
      <div className="team-member">
        <img src={img1} alt="Tasya" />
        <p>ijkl</p>
      </div>
    </div>
  );
}

export default Introduction;