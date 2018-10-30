import React from 'react';

import Osa from './Osa';

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.teksti1} nro={props.arvo1}/>
      <Osa nimi={props.teksti2} nro={props.arvo2}/>
      <Osa nimi={props.teksti3} nro={props.arvo3}/>
    </div>
    );
};

export default Sisalto;
