import React from "react";
import { Card } from "./Card";
import "./CardSidesRow.css";

export const CardSidesRow = () => {
    return (
        <div className="card__row">
            <div className="space__between"></div>
            <div className="pair">
                <Card/>
                <div className="space__between"></div>
                <Card/>
            </div>
            <div className="space__between"></div>
        </div>
    );
}