import { Component } from 'react'
import './like.css'

class Like extends Component {
    render() {
        const { onLikeToggle, liked } = this.props;
        return (
            <div className='card__like' onClick={onLikeToggle}>
                <img src={liked ? "src/images/liked.svg" : "src/images/like.svg"} alt="Like" />
            </div>
        );
    }
}

export default Like