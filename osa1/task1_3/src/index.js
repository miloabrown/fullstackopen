import React from 'react'
import ReactDOM from 'react-dom'

import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko teksti={kurssi}/>
      <Sisalto nimi1={osa1.nimi} nro1={osa1.tehtavia}
      nimi2={osa2.nimi} nro2={osa2.tehtavia}
      nimi3={osa3.nimi} nro3={osa3.tehtavia}/>
      <Yhteensa text="Yhteensä" sum={osa1.tehtavia+osa2.tehtavia+osa3.tehtavia} text2="tehtävää"/>

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
