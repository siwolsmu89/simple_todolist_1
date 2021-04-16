import React, { Component } from 'react';

class ColorChip extends Component {
    render () {
        const { color, active, onClick} = this.props;
        return (
            <div className={`color ${active ? 'active' : ''}`}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick(color);}
                }
                style={{ background: color }}>
            </div>
        );
    }
}

export default ColorChip;