import './input.css';
import { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { onChange, name } = this.props;
        onChange(name, e.target.value); 
    }

    render() {
        const { value, placeholder } = this.props;
        return (
            <input 
                className='login__input'
                placeholder={placeholder || 'Введите значение'} 
                onChange={this.handleChange} 
                value={value} 
                name={this.props.name}
            />
        );
    }
}

export default Input;
