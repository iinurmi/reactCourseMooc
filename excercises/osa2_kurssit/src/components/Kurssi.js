import React from 'react'

const Kurssi = ( {kurssi} ) => {
  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}
const Otsikko = ( {nimi} ) => {
  return (
      <h1>{nimi}</h1>
  )
}

const Osa = ( {nimi, tehtavia} ) => {
  return (
    <div>
      <p> {nimi} {tehtavia} </p>
    </div>
  )
}
const Sisalto = ( {osat} ) => {
  return (
    <div>
      {osat.map(osa =>
        <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>
      )}
    </div>
  )
}

const Yhteensa = ( {osat} ) => {
  const yhteensa = () => osat.reduce((sum, osa) => {
    return sum + osa.tehtavia;
  }, 0);

  return (
    <div>
      yhteensa {yhteensa()} tehtavia
    </div>
  )
}

export default Kurssi
