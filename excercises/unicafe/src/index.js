import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    [
      <h1>{props.title}</h1>
    ]
  )
}

/*const FeedBackButton = (props) => {
  return [
    <button value="{props.value}" onClick={props.handler}> {props.title} </button>
  ]
}*/
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
      buttons: [
        {
          title: 'Hyvä',
          value: 'good'
        },
        {
          title: 'Neutraali',
          value: 'neutral'
        },
        {
          title: 'Huono',
          value: 'bad'
        }
      ],
      stats: {
        goodCounter: 0,
        neutralCounter: 0,
        badCounter: 0,
        average: 0,
        positive: 0,
      }
    }


  }
  totalCount = () => this.state.stats.goodCounter + this.state.stats.badCounter + this.state.stats.neutralCounter;
  calculateAverage = () => {
    let totalValue =  this.state.stats.goodCounter - this.state.stats.badCounter;
    let totalCount = this.totalCount();

    return totalValue / totalCount;
  }
  percentageOfPositiveFeedback = () => {
    let positive =  (this.state.stats.goodCounter / this.totalCount()) * 100;
    return positive;
  }

  render() {
    const addToStats = (key) => {
      const handler = () => {
        let stats = this.state.stats;
        stats[key]++;
        stats['average'] = this.calculateAverage();
        stats['positive'] = this.percentageOfPositiveFeedback();
        this.setState({stats})
      }

      return handler
    }


    return (
      <div>
        <Otsikko title={"Anna Palautetta"} />
        <button onClick={addToStats("goodCounter")}>Hyvä</button>
        <button onClick={addToStats("neutralCounter")}>Neutraali</button>
        <button onClick={addToStats("badCounter")}>Huono</button>
        <Otsikko title={"Statistiikka"} />
        <div>
          <p>Hyvä: {this.state.stats['goodCounter']}</p>
          <p>Neutraali: {this.state.stats['neutralCounter']}</p>
          <p>Huono: {this.state.stats['badCounter']}</p>
          <p>Keskiarvo: {this.state.stats['average'].toFixed(1)}</p>
          <p>Positiivisia: {this.state.stats['positive'].toFixed(1)}%</p>
        </div>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'))
