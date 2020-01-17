import React from 'react'
import { Select, Scope, Input } from '@rocketseat/unform'

const FormFields = ({gradeSys, setGradeSys, message, setMessage}) => {

  const grades3 = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3}
  ]

  const grades5 = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3},
    {id: 4, title: 4},
    {id: 5, title: 5}
  ]

  const setGrading3 = (event) => {
    event.preventDefault()
    setGradeSys(true)
  }

  const setGrading5 = (event) => {
    event.preventDefault()
    setGradeSys(false)
  }

  const validateInput = (event) => {
    const regex = /^[a-zA-z]+$/

    const errorMessage = () => {
      event.preventDefault()
      setMessage('Käytä vain numeroita ja pilkkuja')
      setTimeout(() => {
        setMessage('')
      }, 1500)
    }
    (event.target.value.match(regex) || event.target.value > 3) && errorMessage()
  }

return (
  <div>
    <p>Välj först vitssordsskalan genom att klicka (antingen 1-3 eller 1-5).</p>
    <button
      onClick={setGrading3}
      disabled={gradeSys === true && true}
      className={gradeSys === true ? "buttonDisable" : undefined}>
        Vitsordsskala 1-3
    </button>
    <button
      onClick={setGrading5}
      disabled={gradeSys === false && true}
      className={gradeSys === false ? "buttonDisable" : undefined}>
        Vitsordsskala 1-5
      </button>
    <br/>
    <Scope path='comm'>
      <label>Kunannde i kommunikation och interaktion</label>
      <label>Vitsord</label>
      <Select name='grade' options={
        gradeSys
          ? grades3
          : grades5
        } />
      </Scope>
    <br/>
      <Scope path='math'>
        <label>Kunnande i matematik och naturvetenskap</label>
        <label>Vitsord</label>
        <Select name='grade' options={
          gradeSys
            ? grades3
            : grades5
          } />
      </Scope>
    <br/>
      <Scope path='soc'>
        <label>Kunnande om samhälle och arbetsliv</label>
        <label>Vitsord</label>
        <Select name='grade' options={
          gradeSys
            ? grades3
            : grades5
          } />
      </Scope>
    <br/>
    <Scope path='avg'>
      <label>Det vägda medeltalet för examen</label>
      <Input
        name='avg'
        type='text'
        onKeyPress={validateInput}/>
    </Scope>
    <p className="formMessage" style={{display: (message === '') && 'none'}}>{message}</p>
    <br />
  </div>
  )
}

export default FormFields
