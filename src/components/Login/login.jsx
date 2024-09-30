import Input from '../Input/input'
import Header from '../Header/header'
import './login.css'
import { Component } from 'react'
import { Navigate } from 'react-router-dom';



class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value1: '',
            value2: '',
            redirectToHome: false
        }
        
    }
    handleInputChange = (name, value) => {
        this.setState({ [name]: value });
    };

    handleLoginClick = () => {
        this.setState({ redirectToHome: true });
    };
    render () {
        
        const { value1, value2, redirectToHome} = this.state;
        console.log(value1, value2)
        const isDisabled = (value1.length<3) || (value2.length<3); // False, когда оба элемента не пустые

        if (redirectToHome) {
            return <Navigate to="/" />; 
        }
        return (
            <div className="login">
                <Header></Header>
                <div className="login__wrapper">
                    <div className="login__content">
                        <div className="login__head">
                            <img src="" alt="" />
                            <div className="login__text">Вход</div>
                        </div>
                        <div className="login__inputs">
                            <Input 
                            name="value1"
                            value={value1}
                            onChange={this.handleInputChange}/>
                            <Input
                            name="value2"
                            value={value2}
                            onChange={this.handleInputChange}/>
                        </div>
                        
                        <button className="login__button" disabled={isDisabled} onClick={this.handleLoginClick}>Войти</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;