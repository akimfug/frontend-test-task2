import Header from './components/Header/header.jsx';
import CategoryGoods from './components/Category__goods/categoryGoods.jsx';
import './index.css';
import { Component } from 'react';

class Shop extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <CategoryGoods/>
            </div>
        );
    }
}

export default Shop;