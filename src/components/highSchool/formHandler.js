import {grades, totalScores} from './hsScoreTable'

const count = ({data, setTotal, title, setTitle}) => {
  //Set title array to an empty array to avoid duplication
  title.splice(0,title.length)

  //Turn unform data object into an array
  const dataArray = Object.keys(data).map(key => data[key])

  //Match input values with score table entries
  const matched = dataArray.flatMap(d => {

    //Create an index value based on the input grade
    const index = grades.filter(g => g.id === d.grade)

    //Filter input subjects from score table
    const match = totalScores
      .filter(s => s.id === d.name)

    //Return score value of found subjects
    const score = match.map(m => {
      return !!(index[0])
      ? m.scores[index[0].index]
      : 0
    })

    //Return title of found subjects
    //And push to title array
    const foundTitle = match.map(m => m.title)
    title.push(`${foundTitle} ${score}`)
    setTitle(title)

    //Return matched score value
    return score
  })

  //Sort top 5 values and sum them
  const total = matched
    .sort((a,b) => b-a)
    .slice(0, 5)
    .reduce((a, b) => a + b, 0)

  setTotal(total)
}

export default count
