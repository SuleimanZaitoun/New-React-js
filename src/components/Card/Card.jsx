import React from 'react';

import './Card.scss';

function Card(props) {
  const {
          darkMode,
          flag,
          name,
          population,
          Region,
          Capital,
  } = props;

  return (
    <div className={darkMode ? "box-dark-mode" : "box"}>
      <div
        className="box__div--picture"
        style={{backgroundImage : `url(${flag})`}}
      >
      </div>
      <h4 className={darkMode ? "box__country-name-dark-mode" : "box__country-name"}>
        {name}
      </h4>
      <div
        className="box__div--tags">
        <h6 className={darkMode ? "box__country-info-dark-mode" : "box__country-info"}>
          Population :
          <span className="box__country-info--span-in-gray">
            {new Intl.NumberFormat().format(population)}
          </span>
        </h6>
        <h6 className={darkMode ? "box__country-info-dark-mode" : "box__country-info"}>
          Region :
          <span className="box__country-info--span-in-gray">
            {Region}
          </span>
        </h6>
        <h6 className={darkMode ? "box__country-info-dark-mode" : "box__country-info"}>
          Capital :
          <span className="box__country-info--span-in-gray">
            {Capital}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Card;
