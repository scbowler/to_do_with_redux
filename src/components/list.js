import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../actions';
import NavButton from './nav_button';

class List extends Component {
    componentDidMount(){
        this.props.getAllItems();
    }

    renderList(){
        const { todos } = this.props;

        if(!todos){
            return <h1 className="center">LOADING...</h1>;
        }

        if(!todos.length){
            return <h5 className="center">No To Do Items</h5>;
        }

        const listElements = todos.map(item => {
            return <li className="collection-item" key={item._id}>{item.title}</li>;
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        );
    }

    render(){
        return (
            <div>
                <div className="center">
                    <h1>To Do List</h1>
                    <h5 className="grey-text">Now with Redux!</h5>
                </div>
                <NavButton color="black white-text" to="/add-item">Add Item</NavButton>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        todos: state.list.all
    }
}

export default connect(mapStateToProps, {
    getAllItems: getAllItems
})(List);
