import React from 'react';

import './Card.scss';

function Card(props) {
  return (
    <div className={props.darkMode? 'boxDarkMode' : 'box'}>
      <div className="box__div--picture"
      style={{backgroundImage: `url(${props.flag})`
      }}>
      </div>
      <h4 className={props.darkMode? 'box__country-nameDarkMode' : 'box__country-name'}>
        {props.name}
      </h4>
      <div className="box__div--tags">
        <h6 className={props.darkMode? 'box__country-infoDarkMode' : 'box__country-info'}>Population : <span className="box__country-info--span-in-gray"> {new Intl.NumberFormat().format(props.population)}</span></h6>
        <h6 className={props.darkMode? 'box__country-infoDarkMode' : 'box__country-info'}>Region : <span className="box__country-info--span-in-gray">{props.Region}</span></h6>
        <h6 className={props.darkMode? 'box__country-infoDarkMode' : 'box__country-info'}>Capital : <span className="box__country-info--span-in-gray">{props.Capital}</span></h6>
      </div>
    </div>
  );
}

export default Card;
