import React, {Component} from "react";
import './Main.css';
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
   state ={
            novaTarefa: '',
        };
    inputMudou = (e) => {
        this.setState({
            novaTarefa: e.target.value
        });
    }
    render() {
        const { novaTarefa } = this.state;

        <div className="main">
            <h1>Lista de tarefas</h1>
            <h2></h2>
            <form action='#' className="form">
                <input onChange={this.handleChange} type="text" 
                value={novaTarefa} />
                <button type="submit">
                    <FaPlus />
                </button>
            </form>

        </div>
    }
}