import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import { ref, onValue } from "firebase/database";
import './RealtimeData.css';

function RealtimeDatabase() {
  const [raindrop, setRaindrop] = useState("");
  const [movement, setMovement] = useState("");

  useEffect(() => {
    const raindropRef = ref(db, "sensor/RAINDROP");
    const movementRef = ref(db, "sensor/PIR");

    const unsubscribeRaindrop = onValue(raindropRef, (snapshot) => {
      const data = snapshot.val();
      setRaindrop(data);
    });

    const unsubscribeMovement = onValue(movementRef, (snapshot) => {
      const data = snapshot.val();
      setMovement(data);
    });

    return () => {
      unsubscribeMovement();
      unsubscribeRaindrop();
    };
  }, []);

  return (
    <div id="monitoring">
        <h1 className="text-center">Realtime Database</h1>
    <div className="data-container">
      <div className="data-content">
        <h2>Raindrop</h2>
        <p className="Value" id="raindrop">
          {raindrop}
        </p>
      </div>
      <div>
        <div className="data-item">
          <h2>Movement</h2>
          <p className="Value" id="movement">
            {movement}
          </p>
        </div>
      </div>
    </div>
    <p className="appa"> APPA </p>
    </div>
  );
}

export default RealtimeDatabase;
