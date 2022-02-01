import React, {Component} from "react";
import './CardsContent.css';
import { CardsSidesContainer } from "./CardsSidesContainer";
import { CardSidesRow } from "./CardSidesRow";

export class CardsContent extends Component{
    render(){
        return(
            <div className="block__create__flashcard">
                <CardSidesRow/>
                <CardSidesRow/>
                <CardSidesRow/>
            </div>
        )
    }
}

export default CardsContent;