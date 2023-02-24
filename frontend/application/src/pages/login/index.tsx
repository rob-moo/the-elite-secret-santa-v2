import { LoginForm } from '../../components/login-form';
import styles from './login.module.css';

export const Login = () => {
    return (
        <div className={styles['outer-login-container']}>
            <div className={styles['inner-login-container']}>
                <LoginForm />
            </div>
        </div>
    );
};
