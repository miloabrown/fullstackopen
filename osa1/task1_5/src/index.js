import React from 'react'
import ReactDOM from 'react-dom'

import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko teksti={kurssi.nimi} />
      <Sisalto o1={kurssi.osat[0]} o2={kurssi.osat[1]} o3={kurssi.osat[2]} />
      <Yhteensa text="Yhteensä" sum={kurssi.osat[0].tehtavia+kurssi.osat[1].tehtavia+kurssi.osat[2].tehtavia} text2="tehtävää" />

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
