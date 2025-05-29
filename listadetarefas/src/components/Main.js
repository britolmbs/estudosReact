import React, {Component} from "react";
import './Main.css';
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
   state ={
            novaTarefa: '',
                    tarefas:[
                'Fazer café',
                'Beber água',
                'Estudar'
            ],
        };
    inputMudou = (e) => {
        this.setState({
            novaTarefa: e.target.value,
    
        });
    }
    render() {
        const { novaTarefa, tarefas } = this.state;

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
            <ul className="tarefas">
                {tarefas.map(tarefa => (
                    <li key={tarefa}>
                        {tarefa}
                        <div>
                            <FaEdit className="edit" />
                            <FaWindowClose className="close" />
                        </div>
                        </li>
                ))}
            </ul>

        </div>
    }
}