import { Link } from 'react-router-dom';
import './button.css';

function Button() {
    return (
        <Link to='/login'>
            <button className="login__button">
                Войти
            </button>
        </Link>
    );
}

export default Button;