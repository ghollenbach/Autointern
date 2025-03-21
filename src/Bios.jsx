import React from "react";
import "./Bios.css"; // Ensure the external CSS file is correctly imported

const Bios = () => {
  return (
    <div className="bios">
      <h2>Meet the Team</h2>
      <div className="bio-container">
        <div className="bio">
          <h3>Grace Hollenbach</h3>
          <img src="/grace.JPG" alt="Grace Hollenbach" />
          <p>Is carrying the website at this point since everyone has abandoned her.</p>
        </div>
        <div className="bio">
          <h3>Justin Rosentover</h3>
          <img src="/justin.jpg" alt="Justin Rosentover" />
          <p>At Columbia campus for some reason. No dedication to the site and doesn't appreciate nice designs.</p>
        </div>
        <div className="bio">
          <h3>Ethan Hua</h3>
          <img src="pool.avif" alt="Ethan Hua" />
          <p>Chose swimming over FOPL. Also, he made the site blank which Grace spent HOURS figuring out.</p>
        </div>
        <div className="bio">
          <h3>Yongle Xin</h3>
          <img src="/shadow.webp" alt="Yongle Xin" />
          <p>He was there.</p>
        </div>
      </div>
    </div>
  );
};

export default Bios;
