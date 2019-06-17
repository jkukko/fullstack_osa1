import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({text, count}) => <div>{text} {count}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const Statistics = ({props}) => {
    const total = props[0] + props[1] + props[2]
    if (total === 0) return <div>No feedback given</div>

    else {
        const calcAve = () => {
            if (total === 0) return 0
            else {
                let ave = `${Math.round((props[0] + (-1) * props[2]) / total * 10)}` / 10
                return ave    
            }
        }

        const calcGoodPercentage = () => {
            if (total === 0) return 0
            else {
                return `${Math.round((props[0] / total)*100)}%`
            }
        }
        const ave = calcAve()
        const positivePercentage = calcGoodPercentage()

        return (
            <React.Fragment>
               <Statistic text = {"good"} value = {props[0]} />
               <Statistic text = {"neutral"} value = {props[1]} />
               <Statistic text = {"bad"} value = {props[2]} />
               <Statistic text = {"total"} value = {total} />
               <Statistic text = {"average"} value = {ave} />
               <Statistic text = {"positive"} value = {positivePercentage} />
            </React.Fragment>
         )        
    }
 }
 const Statistic = ({text, value}) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
 }


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
        <h1>give feedback</h1>
        <Button text={"good"} handleClick = {() => setGood(good + 1)} />
        <Button text={"neutral"} handleClick = {() => setNeutral(neutral +1)} />
        <Button text={"bad"} handleClick = {() => setBad(bad + 1)} />

        <h1> statistics </h1>

        <table style={{width: "20%"}}>
        <tbody>
            <Statistics props={[good, neutral, bad]}/>
        </tbody>
        </table>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)