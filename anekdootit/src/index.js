import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const handleAnecdotes = () => {
      setSelected(Math.floor(Math.random()*6))
  }

  const handleVotes = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
  }

  const returnIndexMostVotes = () => {
      return votes.indexOf(Math.max(...votes))
  }

  const calcMostVotes = () => {
      return anecdotes[returnIndexMostVotes()]
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <p> has {votes[selected]} votes </p>
        <Button text={"vote"} handleClick = {() => handleVotes()} />
        <Button text={"next anecdote"} handleClick = {() => handleAnecdotes()} />
        <h1>Anecdote with most votes</h1>
        {calcMostVotes()}
        <p> has {votes[returnIndexMostVotes()]} votes </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
