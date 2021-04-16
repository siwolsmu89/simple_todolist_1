import React from 'react';
import './Form.css';

const Form = ({value, colorValue, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input style={{color: colorValue}} value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;