import React, {Component} from "react";
import {FaTrashAlt} from "react-icons/fa"

export class Order extends Component {
    render() {
        return(
            <div className={'item'}>
                <img src={"./img/" + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price} рублей</b>
                <FaTrashAlt onClick={()=> this.props.onDelete(this.props.item.id)} className={'delete-icon'}/>
            </div>
    )
    }
}
export default Order;