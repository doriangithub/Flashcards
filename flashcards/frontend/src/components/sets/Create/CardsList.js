import React from "react";
import './CardsSidesContainer.css';
import { CardTwoSides } from './CardTwoSides';
import { CardSidesRow } from "./CardSidesRow";
import { useState, useCallback } from 'react';
import update from 'immutability-helper';



export const CardsList = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: '1',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 2,
                text: '2',
                front: "Text from front",
                back: "Text from back"
            },
            {
                id: 3,
                text: '3',
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
            return (<CardSidesRow key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
        };
        return (<>
			<div className="card__sides__container">{cards.map((card, i) => renderCard(card, i))}</div>
		</>);
    }
};