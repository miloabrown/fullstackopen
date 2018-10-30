import React from 'react'
import ReactDOM from 'react-dom'

import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14


  return (
    <div>
      <Otsikko teksti={kurssi} />

      <Sisalto teksti1={osa1} arvo1={tehtavia1}
      teksti2={osa2} arvo2={tehtavia2}
      teksti3={osa3} arvo3={tehtavia3}/>

      <Yhteensa text="yhteensä" sum={tehtavia1 + tehtavia2 + tehtavia3} text2="tehtävää"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
