import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Card } from "./card.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class CardComponent {
    model: Model = new Model();
    randomCard: Card;

    constructor() {
        // Ensure randomCard always has a value by setting it in the constructor
        this.randomCard = this.model.getRandomCardById() || this.getFallbackCard();
    }

    // Optional fallback card in case the deck is empty
    private getFallbackCard(): Card {
        return new Card(0, "None", "No cards available", 0);
    }
}