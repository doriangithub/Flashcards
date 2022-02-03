import React, {Component} from "react";
import './CardsContent.css';
import { CardsSidesContainer } from "./CardsSidesContainer";
import { CardSidesRow } from "./CardSidesRow";

export class CardsContent extends Component{
    render(){
        return(
            <div className="block__create__flashcard">
                <div className="front__back__title">
                    <div className="space__front__back"></div>
                    <div className="pair__front__back">
                        <div className="card__title">Front</div>
                        <div className="space__front__back"></div>
                        <div className="card__title">Back</div>
                    </div>
                    <div className="space__front__back"></div>
                </div>
                <CardSidesRow/>
                <CardSidesRow/>
                <CardSidesRow/>
            </div>
        )
    }
}

export default CardsContent;