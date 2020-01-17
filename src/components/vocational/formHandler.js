import {commObj, avgObj} from './vocScores'

const count = ({data, setTotalS, gradeSys, titles, setTitles}) => {

  //Grade values from form input
  const inputGrades = [ data.comm.grade, data.math.grade, data.soc.grade ]

  //Dynamically switch grading scales
  const grading = gradeSys ? commObj.grade3 : commObj.grade5
  const gradeTable = gradeSys ? avgObj.gradeTable3 : avgObj.gradeTable5

  //Turn input value to floating point number
  //Sanitize comma-seperated values
  const average = parseFloat(
    data.avg.avg
    .replace(',', '.')
  )

  //Count values for common subjects
  const commGrades = inputGrades.map(g => grading[g - 1])

  //Reduce table with average values
  //Accumulate when current value is higher or equal to average
  const index = gradeTable.reduce((i, g) => {
    return g > average ? i + 1 : i
  }, 0)

  //Use index to pick out score from scores table
  const total = commGrades.reduce((a, b) => a + b, 0) + avgObj.scores[index]
  commGrades.push(avgObj.scores[index])
  setTitles(commGrades)
  setTotalS(total)
}

export { count }
