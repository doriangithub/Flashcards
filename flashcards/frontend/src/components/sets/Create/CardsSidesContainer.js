import React from "react";
import './CardsSidesContainer.css';
import { CardTwoSides } from './CardTwoSides';
import { useState, useCallback } from 'react';
import update from 'immutability-helper';



export const CardsSidesContainer = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Write a cool JS library',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 2,
                text: 'Make it generic enough',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 3,
                text: 'Write README',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 4,
                text: 'Create some examples',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 5,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 6,
                text: '???',
                front: "Text from front",
                back: "Text from back"
            },
        ]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<CardTwoSides key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
        };
        return (<>
			<div className="card__sides__container">{cards.map((card, i) => renderCard(card, i))}</div>
		</>);
    }
};