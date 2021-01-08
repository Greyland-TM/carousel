import React, { Component } from 'react';
import jumping from '../../Media/jumping.jpg';

class Card extends Component {
    render () {
        return (
            <div className='card'>
                <div className='card__content'>
                    <img src={jumping} alt='adventure van' className='card__content--pictue'></img>
                    <h1 className='card__content--header'>Project</h1>
                </div>
            </div>
        );
    }
}

export default Card;