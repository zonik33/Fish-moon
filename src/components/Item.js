import React, {Component} from "react";

export class Items extends Component {
    render() {
        return(
            <div className={'item'}>
                <img src={"./img/" + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price} рублей</b>
                <div className={'add-to-cart'} onClick={() => this.props.onAdd(this.props.item)}>+</div>



            </div>
        )
    }
}
export default Items;