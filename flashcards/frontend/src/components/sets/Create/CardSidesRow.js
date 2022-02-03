import React from "react";
import { Card } from "./Card";
import "./CardSidesRow.css";
import trash from './Trash_icon.svg'; 

export const CardSidesRow = () => {
    return (
        <div className="card__row">
            <div className="trash__button__container">
                <button class="button__number">            
                    <div class="button__number__D">5</div>
                </button>                
            </div>
            <div className="pair">
                <Card/>
                <div className="space__between"></div>
                <Card/>
            </div>
            <div className="trash__button__container">
                <a href="#" className="trash">
                    <img border="0" alt="My Happy SVG" src={trash} width="56" height="56"></img>
                </a> 
            </div>
        </div>
    );
}