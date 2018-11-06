import React from 'react';

import Osa from './Osa';

const Sisalto = (props) => {
  return (
    <div>
      <Osa obj={props.o1} />
      <Osa obj={props.o2} />
      <Osa obj={props.o3} />
    </div>
    );
};

export default Sisalto;
