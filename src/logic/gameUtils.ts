import { CardSuit, CardFace, STANDARD_CARD_VALUES } from '../constants';
import { Card } from '../types';

export class Deck {
    cards: Card[];

    constructor(shuffled = true) {
        this.cards = [];
        for (let cardSuit in CardSuit) {
            for (let cardFace in CardFace) {
                let newCard: Card = {
                    suit: cardSuit,
                    face: cardFace
                }
                this.cards.push(newCard);
            }
        }
        if (shuffled) {
            this.shuffle();
        }
    }

    drawCard(): Card {
        return this.cards.shift();
    }

    shuffle(): Deck {
        let shuffled: Card[] = [];
        while (this.cards.length > 0) {
            let index: number = Math.random() * this.cards.length;
            shuffled.push(this.cards.splice(index, 1)[0]);
        }
        this.cards = shuffled;
        return this;
    }

    peekTop(): Card {
        return this.cards[0];
    }
}

export function buildDeck(): Deck {
    return new Deck();
}

export function blackjackValueOf(card: Card): number{
    return STANDARD_CARD_VALUES[card.face];
}

export function scoreHand(hand: Card[]): number {
    let sum: number = 0, aces: number = 0;
    hand.forEach(card =>{
        sum += blackjackValueOf(card);
        if (card.face === CardFace.Ace) {
            aces++;
        }
    });

    //Handle aces
    while (aces > 0 && sum > 21) {
        sum -= 10;
        aces--;
    }

    return sum;
}