import React from 'react'
import ReactDOM from 'react-dom'

import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
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

  return (
    <div>
      <Otsikko teksti={kurssi} />
      <Sisalto o1={osat[0]} o2={osat[1]} o3={osat[2]} />
      <Yhteensa text="Yhteensä" sum={osat[0].tehtavia+osat[1].tehtavia+osat[2].tehtavia} text2="tehtävää" />

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
