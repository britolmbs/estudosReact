import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Form.css"
import PropTypes from "prop-types";

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input
            onChange={handleChange}
            type="text"
            value={novaTarefa}
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>

    );
}

Form.propType ={
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}