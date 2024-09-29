import { Component } from 'react'
import './modal.css'

class Modal extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const { modalData, changeActive, active } = this.props;
        if (!modalData) return null;

        const { name, url, price } = modalData;
        return (
            <div className={active ? 'modal active' : 'modal'} onClick={() => changeActive()}>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__exit" onClick={() => changeActive()}>X</div>
                    <div className='modal__img'>
                        <img src={url} alt={name} />
                    </div>
                    <div className="card__info">
                        <div className="card__name">{name}</div>
                        {price ? <div className="card__price">{price}</div> : null}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Modal