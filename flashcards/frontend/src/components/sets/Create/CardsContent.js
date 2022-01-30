import React, {Component} from "react";
import './CardsContent.css';
import { CardsSidesContainer } from "./CardsSidesContainer";

export class CardsContent extends Component{
    render(){
        return(
            <div className="block__create__flashcard">
                <CardsSidesContainer/>
            </div>
        )
    }
}

export default CardsContent;