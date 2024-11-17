import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="acheivements" className="achievements-section">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        <li>
          <h3>Winner of CBIT Hacktober Fest 2023</h3>
          <p>
            Successfully created innovative solutions and won accolades during the CBIT Hacktober Fest 2023.
          </p>
        </li>
        <li>
          <h3>Guitarist</h3>
          <p>
            Passionate guitarist with experience in playing various genres and performing at multiple events.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Achievements;
