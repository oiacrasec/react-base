import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import './Login.css';
import logo from '../../assets/images/logo192.png';

function Login() {
	return (
		<div className="App">
			<header className="App-header">
				<Card className="card-width">
					<div className="p-grid p-fluid">
						<div className="p-col-12 App-logo-container">
							<img className='App-logo' src={logo} alt="Logomarca"/>
						</div>
					</div>
					
					<div className="p-grid p-fluid">
						<div className="p-col-12 p-text-center">
							<p>Acesso ao sistema</p>
						</div>
					</div>
					
					<div className="p-grid p-formgrid p-fluid">
						<div className="p-col-12 p-field">
							<label className="form-label" htmlFor="login">Login</label>
							<InputText id="login" type="text"/>
						</div>
						<div className="p-col-12 p-field">
							<label className="form-label" htmlFor="senha">Senha</label>
							<InputText id="senha" type="password"/>
						</div>
					</div>
					
					<div className="p-grid">
						<div className="p-offset-6 p-col-6 p-text-right">
							<Link to="/recovery">Esqueceu a senha?</Link>
						</div>
					</div>
					
					<div className="p-grid p-fluid">
						<div className="p-col-12">
							<Button label="Entrar"/>
						</div>
					</div>
				</Card>
			</header>
		</div>
	);
}

export default Login;
