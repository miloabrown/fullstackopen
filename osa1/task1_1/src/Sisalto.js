import React from 'react';

const Sisalto = (props) => {
  return (
    <div>
      <p>{props.teksti1} {props.arvo1}</p>
      <p>{props.teksti2} {props.arvo2}</p>
      <p>{props.teksti3} {props.arvo3}</p>
    </div>
    );
};

export default Sisalto;
