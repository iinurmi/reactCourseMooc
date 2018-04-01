import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div><h1>{props.title}</h1></div>
  )
}

const Button = ({ handler, handlerKey, name }) => {
  return (
    <span>
      <button onClick={handler(handlerKey)}>{name}</button>
    </span>
  )
}
const Statistics = ({stats}) => {
  if (stats.totalCount === 0) {
      return (
        <div>
          <Otsikko title={"Statistiikka"} />
          <p>ei yhtään palautetta annettu </p>
        </div>
      )
  }
  return (
    <div>
      <Otsikko title={"Statistiikka"} />
      <table>
      <thead></thead>
        <tbody>
          <Statistic name="Hyvä" value={stats['goodCounter']} />
          <Statistic name="Neutraali" value={stats['neutralCounter']} />
          <Statistic name="Huono" value={stats['badCounter']} />
          <Statistic name="Keskiarvo" value={stats['average'].toFixed(1)} />
          <Statistic name="Keskiarvo" value={stats['positive'].toFixed(1) + '%'} />
        </tbody>
      </table>
    </div>
  )
}
const Statistic = ({name, value}) => {
  return (
    <tr><td>{name}</td><td>{value}</td></tr>
  )
}

/*const FeedBackButtons = (props) => {
  const feedBackButtons = props.buttons.map((button) =>
    <FeedBackButton value={button.value}
              title={button.title}  />
  );
  return (
    <div>
      {feedBackButtons}
    </div>
  );
}*/



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      stats: {
        goodCounter: 0,
        neutralCounter: 0,
        badCounter: 0,
        average: 0,
        positive: 0,
        totalCount:0,
      }
    }


  }
  //totalCount = () => this.state.stats.goodCounter + this.state.stats.badCounter + this.state.stats.neutralCounter;
  calculateAverage = () => {
    let totalValue =  this.state.stats.goodCounter - this.state.stats.badCounter;
    let totalCount = this.state.stats.totalCount;

    return totalValue / totalCount;
  }
  percentageOfPositiveFeedback = () => {
    let positive =  (this.state.stats.goodCounter / this.state.stats.totalCount) * 100;
    return positive;
  }

  render() {
    const addToStats = (key) => {
      const handler = () => {
        let stats = this.state.stats;
        stats[key]++;
        stats['totalCount']++;
        stats['average'] = this.calculateAverage();
        stats['positive'] = this.percentageOfPositiveFeedback();
        this.setState({stats})
      }

      return handler
    }


    return (
      <div>
        <Otsikko title={"Anna Palautetta"} />
        <Button handler={addToStats} handlerKey={"goodCounter"} name={"Hyvä"} />
        <Button handler={addToStats} handlerKey={"neutralCounter"} name={"Neutraali"} />
        <Button handler={addToStats} handlerKey={"badCounter"} name={"Huono"} />

        <Statistics stats={this.state.stats} />
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
