import React, { useState } from 'react'
import { Form } from '@rocketseat/unform'
import FormFields from './Formfields'
import { count } from './formHandler'
import Results from './Results'

//Create a summary of grades
const Titles = titles => {
  const titleArray = Object.keys(titles).map(key => titles[key])
  console.log(titleArray)
  return (
    <div>
      <h5>Poäng på enskilda ämnen:</h5>
      <p>Kunannde i kommunikation och interaktion: {titleArray[0][0]}</p>
      <p>Kunnande i matematik och naturvetenskap: {titleArray[0][1]}</p>
      <p>Kunnande om samhälle och arbetsliv: {titleArray[0][2]}</p>
      <p>Det vägda medeltalet för examen: {titleArray[0][3]}</p>
    </div>
  )
}

const VocForm = () => {

  const [totalS, setTotalS] = useState('')
  const [gradeSys, setGradeSys] = useState(true)
  const [titles, setTitles] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = data => {
    data.avg.avg
    ? count({data, setTotalS, gradeSys, titles, setTitles})
    : setMessage('Kontrollera medeltalet.')
    setTimeout(() => {
      setMessage('')
    }, 1500)
  }

  return (
    <div>
    <p>Välj först den korrekta vitsordsskalan och sedan vitsorden för de tre
    gemensamma examensdelarna i rullgardinsmenyn. Ange dessutom det vägda
    medeltalet för examen med två decimalers noggrannhet (t.ex. 2,67).
    </p>
      <Form onSubmit={handleSubmit}>
        <FormFields
          gradeSys={gradeSys}
          setGradeSys={setGradeSys}
          message={message}
          setMessage={setMessage}/>
        <button type='submit'>Laske</button>
      </Form>
      {titles.length > 0 &&
      <div>
        <Results totalS={totalS} />
        <Titles titles={titles}/>
      </div>
      }
    </div>
  )
}

export default VocForm
