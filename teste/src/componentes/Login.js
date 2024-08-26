import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Login.css';

const firebaseConfig = {
    apiKey: "AIzaSyDIYrznd4zcW6P7rgkQwXeJ1a6lcCCty_8",
    authDomain: "aplicacao-web-8f1bd.firebaseapp.com",
    projectId: "aplicacao-web-8f1bd",
    storageBucket: "aplicacao-web-8f1bd.appspot.com",
    messagingSenderId: "788084141595",
    appId: "1:788084141595:web:c7d899a57e470309c052be"
};

initializeApp(firebaseConfig);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('user-email', userCredential.user.email);
                navigate('/telacompra');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="container">
             <div className="login-form-wrapper">
                <h1>Login</h1>
                <form id="login-form" className="login-form" onSubmit={handleSubmit}>
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
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button><br />
                    <p><Link to="/cadastro" style={{color: 'black'}}>Criar Acesso</Link></p><br />
                    <p><Link to="/adm" style={{color: 'black'}}>Acesso Adm</Link></p>
                </form>
                {error && <p id="login-error-message" style={{color: 'red'}}>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
