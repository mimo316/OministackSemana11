import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';



function Logon() {

	const [id, setID] = useState('');
	const history = useHistory()

async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await api.post('sessions', { id });

			localStorage.setItem('ongId', id)
			localStorage.setItem('ongName', response.data.name)

			history.push('/profile')

		} catch (err) {
			alert('Falha no login, tente novamente.')
		}
	}
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="" srcset=""/>
	
				<form onSubmit={handleLogin}>
					<h1>Faça sua Doação</h1>
	
					<input 
					value={id}
					onChange={e => setID(e.target.value)}
					placeholder="Sua ID"/>

					<button className="button" type="submit">Entrar</button>
	
					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#E02041"/>
						Não Tenho cadastro
					</Link>
				</form>
	
	
			</section>
			<img src={heroesImg} alt="Heroes" srcset=""/>
		</div>
	);
	
}


export default Logon;
