import { Card } from "./card.model";

export class SimpleDataSource {
    private data: Card[];

    constructor() {
        this.data = new Array<Card>(
            
            // I'm giving face cards and aces ranks of 10-13 so there's no confusion between numbers and strings in code. This is also to ensure aces are always the highest card. Jokers have also been omitted in this deck.

            // HEARTS
            new Card(1, "Hearts", "Two of Hearts", 1),
            new Card(2, "Hearts", "Three of Hearts", 2),
            new Card(3, "Hearts", "Four of Hearts", 3),
            new Card(4, "Hearts", "Five of Hearts", 4),
            new Card(5, "Hearts", "Six of Hearts", 5),
            new Card(6, "Hearts", "Seven of Hearts", 6),
            new Card(7, "Hearts", "Eight of Hearts", 7),
            new Card(8, "Hearts", "Nine of Hearts", 8),
            new Card(9, "Hearts", "Ten of Hearts", 9),
            new Card(10, "Hearts", "Jack of Hearts", 10),
            new Card(11, "Hearts", "Queen of Hearts", 11),
            new Card(12, "Hearts", "King of Hearts", 12),
            new Card(13, "Hearts", "Ace of Hearts", 13),
            
            // CLUBS
            new Card(14, "Clubs", "Two of Clubs", 1),
            new Card(15, "Clubs", "Three of Clubs", 2),
            new Card(16, "Clubs", "Four of Clubs", 3),
            new Card(17, "Clubs", "Five of Clubs", 4),
            new Card(18, "Clubs", "Six of Clubs", 5),
            new Card(19, "Clubs", "Seven of Clubs", 6),
            new Card(20, "Clubs", "Eight of Clubs", 7),
            new Card(21, "Clubs", "Nine of Clubs", 8),
            new Card(22, "Clubs", "Ten of Clubs", 9),
            new Card(23, "Clubs", "Jack of Clubs", 10),
            new Card(24, "Clubs", "Queen of Clubs", 11),
            new Card(25, "Clubs", "King of Clubs", 12),
            new Card(26, "Clubs", "Ace of Clubs", 13),
            
            // DIAMONDS
            new Card(27, "Diamonds", "Two of Diamonds", 1),
            new Card(28, "Diamonds", "Three of Diamonds", 2),
            new Card(29, "Diamonds", "Four of Diamonds", 3),
            new Card(30, "Diamonds", "Five of Diamonds", 4),
            new Card(31, "Diamonds", "Six of Diamonds", 5),
            new Card(32, "Diamonds", "Seven of Diamonds", 6),
            new Card(33, "Diamonds", "Eight of Diamonds", 7),
            new Card(34, "Diamonds", "Nine of Diamonds", 8),
            new Card(35, "Diamonds", "Ten of Diamonds", 9),
            new Card(36, "Diamonds", "Jack of Diamonds", 10),
            new Card(37, "Diamonds", "Queen of Diamonds", 11),
            new Card(38, "Diamonds", "King of Diamonds", 12),
            new Card(39, "Diamonds", "Ace of Diamonds", 13),

            // SPADES
            new Card(40, "Spades", "Two of Spades", 1),
            new Card(41, "Spades", "Three of Spades", 2),
            new Card(42, "Spades", "Four of Spades", 3),
            new Card(43, "Spades", "Five of Spades", 4),
            new Card(44, "Spades", "Six of Spades", 5),
            new Card(45, "Spades", "Seven of Spades", 6),
            new Card(46, "Spades", "Eight of Spades", 7),
            new Card(47, "Spades", "Nine of Spades", 8),
            new Card(48, "Spades", "Ten of Spades", 9),
            new Card(49, "Spades", "Jack of Spades", 10),
            new Card(50, "Spades", "Queen of Spades", 11),
            new Card(51, "Spades", "King of Spades", 12),
            new Card(52, "Spades", "Ace of Spades", 13),
        )
    }

    getData(): Card[] {
        return this.data;
    }
}