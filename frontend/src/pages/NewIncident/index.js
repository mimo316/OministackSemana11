import React, {useState, useEffect} from 'react';
import logoImg from '../../assets/logo.svg'
import {Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'

function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [value, setValue] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  async function handleNewIncident(e){
    e.preventDefault()

   const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" srcset=""/>

          <h1>Cadastrar novos casos</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
					<FiArrowLeft size={16} color="#E02041"/>
					Voltar para home
				</Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título do caso"/>
          <textarea 
          value={description}
          onChange={e => setdescription(e.target.value)}
          placeholder="Descrição" />

          <input 
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Valor em reais"/>

          <button className="button" type="submit">Cadastrar</button>

        </form>

      </div>
    </div>
);
}

export default NewIncident;
