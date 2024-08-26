import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './CSS/Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDIYrznd4zcW6P7rgkQwXeJ1a6lcCCty_8",
    authDomain: "aplicacao-web-8f1bd.firebaseapp.com",
    projectId: "aplicacao-web-8f1bd",
    storageBucket: "aplicacao-web-8f1bd.appspot.com",
    messagingSenderId: "788084141595",
    appId: "1:788084141595:web:c7d899a57e470309c052be"
};

initializeApp(firebaseConfig);

function Adm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'diegorodriguescps@gmail.com' && password === '123456') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    localStorage.setItem('admin-email', userCredential.user.email);
                    navigate('/telaadm');
                })
                .catch((error) => {
                    setError('Erro ao autenticar: ' + error.message);
                });
        } else {
            setError('Credenciais inválidas.');
        }
    };

    return (
        <div className="container">
            <main className="login-form-wrapper">
                <h1>Acesso Administrador</h1>
                <form id="admin-login-form" className="login-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button><br />
                </form>
                {error && <p id="login-error-message" style={{color: 'red'}}>{error}</p>}
            </main>
        </div>
    );
}

export default Adm;
