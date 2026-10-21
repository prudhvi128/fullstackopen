const Header=({course})=>{
  return(
    <h1>{course}</h1>
  )
}
const Part=(props)=>{
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}
const Total=(props)=>{
  return(
    <>
      <p>Number of evercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}
const App=()=>{
  const course= 'half stack application development'
  const part1= 'Fundamentals of React'
  const exercises1= 10
  const part2= 'Using props to pass data'
  const exercises2= 7
  const part3= 'State of a component'
  const exercises3= 14

  return(
    <>
      <Header course={course}/>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App;