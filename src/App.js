import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Омлет',
                    img: 'omlet.jpg',
                    desc: '',
                    category: '',
                    price: '445'
                },
                {
                    id: 2,
                    title: 'Рататуй',
                    img: 'ratatouille.jpg',
                    desc: '',
                    category: '',
                    price: '740'
                },
                {
                    id: 3,
                    title: 'Окрошка',
                    img: 'okrosh.jpg',
                    desc: '',
                    category: '',
                    price: '555'
                },
                {
                    id: 4,
                    title: 'Карбонара',
                    img: 'karbonara.jpg',
                    desc: '',
                    category: '',
                    price: '777'
                },
                {
                    id: 5,
                    title: 'Гамбургер',
                    img: 'gamb.jpg',
                    desc: '',
                    category: '',
                    price: '444'
                }

            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
                <Items items = {this.state.items} onAdd = {this.addToOrder}/>
                <Footer/>
            </div>
        );
    }
    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})

    }
    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true;
        })
            if (!isInArray)
                this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
