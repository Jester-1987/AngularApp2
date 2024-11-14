import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Card } from "./card.model";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class CardComponent {
    model: Model = new Model();
    playerCard: Card | undefined;
    computerCard: Card | undefined;
    winner: string | undefined;

    constructor() {
        this.drawCards();
    }

    drawCards() {
        this.playerCard = this.model.getRandomCardById();
        this.computerCard = this.model.getRandomCardById();

        // Ensure both cards are defined and compare ranks
        if (this.playerCard && this.computerCard) {
            if (this.playerCard.rank! > this.computerCard.rank!) {
                this.winner = "You win!";
            } else if (this.playerCard.rank! < this.computerCard.rank!) {
                this.winner = "You lose!";
            } else {
                this.winner = "It's a tie!";
            }
        } else {
            this.winner = "No cards available.";
        }
    }
}