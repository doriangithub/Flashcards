import React, { Fragment } from "react";
import FormFindFlashcards from "./FormFindFlashcards";
import FormButtonToCreateFlashcards from "./FormButtonToCreateFlashcards";
import Dashboard from "./Dashboard";

export default function Home(){
    return (
        <Fragment>
            <div className="block__row">
                <div className="block__row1__column1">
                    <FormFindFlashcards/>
                </div>
                <div className="block__row1__column2">
                    <FormButtonToCreateFlashcards/>
                </div>                
            </div>
            <div>
            <Dashboard />
            </div>
        </Fragment>
    )
}
