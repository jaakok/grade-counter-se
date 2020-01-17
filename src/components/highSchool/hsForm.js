import React, { useState } from 'react'
import { Form, Select, Scope, Input } from '@rocketseat/unform'
import Results from './Results'
import count from './formHandler'
import {score, grades, math, forLang} from './hsScoreTable'

const FormField = ({props}) => {
  return (
    <>
    <Scope path={props.length}>
      <label>
      Aine
      <Select name='name' options={score}/>
      </label>
      <label>
      Arvosana
      <Select name='grade' options={grades} />
      </label>
    </Scope>
    <br/>
    </>
  )
}

const HSForm = () => {

  const [children, setChildren] = useState([])
  const [totalS, setTotal] = useState('')
  const [title, setTitle] = useState([])
  const [message, setMessage] = useState('')

  const handleSubmit = data => {

    console.log('submitted!')
    !!(data.fin.grade)
    ? count({data, setTotal, title, setTitle})
    : setMessage('Välj vitsorden.')
    setTimeout(() => setMessage(''), 1500)
  }

  const add = event => {
    event.preventDefault()
    //Let user add formfields if less than 2 exist
    children.length < 2 && setChildren([...children, <FormField props={children}/>])
    children.length >= 2 && setMessage('Du kan lägga till endast två realämnen / främmande språk.')
    setTimeout(() => setMessage(''), 1500)
  }

  const remove = event => {
    event.preventDefault()
    setChildren(children.slice(0, -1))
  }

  return (
    <div>
    <p>Välj vitsordet i rullgardinsmenyn. I punkten ämnesreal /
    främmande språk kan du lägga till högst två ämnen.
    Om du har avlagt en internationell studentexamen (EB, IB eller RP/DIA),
    välj de vitsord som dina vitsord motsvarar i den finländska studentexamen.</p>
      <Form onSubmit={handleSubmit}>
        <Scope path='fin'>
          <label>
          Modersmål
          </label>
          <Input readOnly={true} style={{display: 'none'}} name='name' value='fin'/>
          <label>
          Vitsord
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <Scope path='math'>
          <label>
          Matematik
          <Select name='name' options={math} />
          </label>
          <label>
          Vitsord
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <Scope path='foreign'>
          <label>
          Främmande språk / det andra inhemska språket
          </label>
          <Select name='name' options={forLang} />
          <label>
          Vitsord
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <p>Lägg till ämnesrealer / främmande språk<br/>
            (högst två)</p>
          {children.map(child => child)}
          <button onClick={add}>Lägg till ett ämne</button>
          <button onClick={remove}>Ta bort det senaste fältet</button>
        <br/>
        <button type='submit'>Räkna</button>
      </Form>
      <p className="formMessage" style={{display: (message === '') && 'none'}}>{message}</p>
      <Results totalS={totalS} title={title}/>
    </div>
  )
}

export default HSForm
