import { Component } from 'react'
import './card.css'
import Like from '../Like/like'

class Card extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { name, url, price, liked, onLikeToggle, isLiked, onModal} = this.props;
        return (  
            <div className="card">
                <div className='card__img' onClick={() => onModal({ name, url, price })}>
                    <img src={url} alt={name} />
                </div>
                
                <div className='card__info'>
                    <div className="card__name">{name}</div>
                    
                    {price ? <span className='card__price'>{price}</span> : null}
                    {isLiked ? <Like onLikeToggle={onLikeToggle} liked={liked} /> : null}
                    
                </div>
            </div>
        );
    }
}

export default Card