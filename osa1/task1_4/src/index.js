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
    },
    {
      yhteensa: 31
    }
  ]

  return (
    <div>
      <Otsikko teksti={kurssi}/>
      <Sisalto nimi1={osat[0].nimi} nro1={osat[0].tehtavia}
      nimi2={osat[1].nimi} nro2={osat[1].tehtavia}
       nimi3={osat[2].nimi} nro3={osat[2].tehtavia}/>
      <Yhteensa text='Yhteensä' sum={osat[3].yhteensa} text2='tehtävää'/>

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
