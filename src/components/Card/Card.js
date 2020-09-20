import React from 'react';

import './Card.scss';

function Card() {
  return (
    <div className="box ">
      <div className="box__div--picture">
      </div>
      <h4 className="box__country-name">
        Colombia
      </h4>
      <div className="box__div--tags">
        <h6 className="box__country-info">Population : <span className="box__country-info--span-in-gray">48759958</span></h6>
        <h6 className="box__country-info">Region : <span className="box__country-info--span-in-gray">America</span></h6>
        <h6 className="box__country-info">Capital : <span className="box__country-info--span-in-gray">Bogotá</span></h6>
      </div>
    </div>
  );
}

export default Card;
