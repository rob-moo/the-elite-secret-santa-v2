import { useState } from 'react';
import styles from './loginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { UserVerifier } from '../../classes/userVerifier/UserVerifier';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (): any => {
        if (UserVerifier.validate(username, password))
            navigate(
                `/santas/${encodeURIComponent(password.toLocaleLowerCase())}`
            );
    };

    return (
        <div className={styles['outer-login-form-container']}>
            <div className={styles['santa-container']}>
                <img
                    src={'https://i.gifer.com/TZOK.gif'}
                    style={{ height: '50%' }}
                    alt=""
                ></img>
            </div>
            <div className={styles['inner-login-form-container']}>
                <div className={styles['user-pass-container']}>
                    <div className={styles['username-container']}>
                        <label htmlFor="username">Name:</label>
                        <input
                            id="username"
                            required
                            value={username}
                            onInput={(input) => {
                                setUsername(input.currentTarget.value);
                            }}
                        ></input>
                    </div>
                    <div className={styles['password-container']}>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            minLength={4}
                            required
                            value={password}
                            onInput={(input) => {
                                setPassword(input.currentTarget.value);
                            }}
                        ></input>
                    </div>
                    <button
                        className={styles['submit-login']}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
