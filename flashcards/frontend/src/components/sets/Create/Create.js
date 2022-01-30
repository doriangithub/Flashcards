import React, { Fragment } from "react";
import FormCreateNewFlashcardSet from "./FormCreateNewFlashcardSet";
import CardsContent from "./CardsContent";
import './Create.css'

export default function Create (){
    return (
        <Fragment>
            <div className="block__row__description">
                <FormCreateNewFlashcardSet/>
            </div>
            <div className="block__row__cards">
                <CardsContent/>
            </div>
        </Fragment>
    )
}

