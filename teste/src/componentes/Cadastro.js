import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './CSS/Cadastro.css'; // Certifique-se de que o CSS esteja correto

const firebaseConfig = {
    apiKey: "AIzaSyDIYrznd4zcW6P7rgkQwXeJ1a6lcCCty_8",
    authDomain: "aplicacao-web-8f1bd.firebaseapp.com",
    projectId: "aplicacao-web-8f1bd",
    storageBucket: "aplicacao-web-8f1bd.appspot.com",
    messagingSenderId: "788084141595",
    appId: "1:788084141595:web:c7d899a57e470309c052be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dob, setDob] = useState('');
    const [cep, setCep] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.location.href = '/login'; // Redireciona para a página de login
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <main>
            <h1>Cadastro</h1>
            <form id="register-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Nome (Somente o Primeiro)" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Sobrenome" 
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    required 
                />
                <input 
                    type="date" 
                    placeholder="Data de Nascimento" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="CEP (somente números)" 
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required 
                />
                <button type="submit">Cadastrar</button>
            </form>
            {errorMessage && <p id="register-error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        </main>
    );
}

export default Cadastro;
