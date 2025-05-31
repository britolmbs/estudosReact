import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";
import './Tarefas.css'

export default function Tarefas ({tarefas, handleEdit, handleDelete}) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefas, index) => (
                <li key={tarefas}>
                    {tarefas}
                    <span>
                        <FaEdit
                        className="edit"
                        onClick={(e) => handleEdit(e, index)}
                        />
                        <FaWindowClose
                        onClick={(e) => handleDelete(e, index)}
                        className="close"
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}
Tarefas.propTypes = {

    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas: PropTypes.array.isRequired,
}