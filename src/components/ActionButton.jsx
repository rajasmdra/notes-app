import React from "react";
import PropTypes from "prop-types";

function ActionButton({ title, onClick, icon, type = "button" }) {
    return (
        <button 
            className="action" 
            type={type} 
            title={title} 
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

ActionButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
};

export default ActionButton;