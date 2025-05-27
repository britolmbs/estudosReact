import React, {Component} from "react";
import './Main.css';

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
            <form action='#'>
                <input onChange={this.handleChange} type="text" />
                <button type="submit">Enviar</button>
            </form>

        </div>
    }
}