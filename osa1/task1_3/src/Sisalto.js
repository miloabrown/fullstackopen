import React from 'react';

import Osa from './Osa';

const Sisalto = (props) => {
  return (
    <div>
      <p>{props.nimi1} {props.nro1}</p>
      <p>{props.nimi2} {props.nro2}</p>
      <p>{props.nimi3} {props.nro3}</p>
      </div>
    );
};

export default Sisalto;
