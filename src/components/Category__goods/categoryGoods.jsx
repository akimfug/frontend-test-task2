import './categoryGoods.css';
import Card from '../Card/card';
import React from 'react';
import Modal from '../Modal/modal';

class CategoryGoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalActive: false
        };
        this.id = 0;
        this.changeModalActive = this.changeModalActive.bind(this);
    }

    changeModalActive = (cardData) => {
        this.setState(({ modalActive }) => ({
            modalActive: !modalActive,
            modalData: cardData
        }));
    }

    getGoodsData() {
        fetch('http://localhost:3000/goods')
            .then(response => response.json())
            .then(resp => {
                return resp.map(item => ({
                    ...item,
                    id: ++this.id
                }));
            })
            .then((resp) => {
                this.setState({ data: resp });
            })
            .catch(error => console.error('Ошибка в fetch:', error));
    }

    componentDidMount() {
        this.getGoodsData();
    }

    likeToggle = (categoryIndex, cardIndex) => {
        this.setState(({ data }) => ({
            data: data.map((category, catIndex) => {
                if (catIndex === categoryIndex) {
                    return {
                        ...category,
                        cards: category.cards.map((card, index) => {
                            if (index === cardIndex) {
                                return {
                                    ...card,
                                    liked: !card.liked // Переключаем лайк
                                };
                            }
                            return card;
                        })
                    };
                }
                return category;
            })
        }));
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item, categoryIndex) => {
                        const { category, cards } = item;
                        return (
                            <div className="category" key={categoryIndex}>
                                <div className="category__header">
                                    {category}
                                </div>
                                <div className="category__goods">
                                    {cards.map((card, cardIndex) => ( 
                                        <Card 
                                        key={card.id}
                                        name={card.name}
                                        url={card.url}
                                        price={card.price}
                                        isLiked={card.isLiked}
                                        liked={card.liked}
                                        onModal={(card) => this.changeModalActive(card)}
                                        onLikeToggle={() => this.likeToggle(categoryIndex, cardIndex)} 
                                    />
                                    ))}
                                </div>
                            </div>
                        );
                    })
                }
                <Modal modalData={this.state.modalData} active={this.state.modalActive} changeActive={this.changeModalActive}>
                    {/* Содержимое модального окна */}
                </Modal>
            </div>
        );
    }
}

export default CategoryGoods;