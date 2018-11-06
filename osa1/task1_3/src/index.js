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
      <Otsikko teksti={kurssi} />
      <Sisalto o1={osa1} o2={osa2} o3={osa3} />
      <Yhteensa text="Yhteensä" sum={osa1.tehtavia+osa2.tehtavia+osa3.tehtavia} text2="tehtävää" />

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
