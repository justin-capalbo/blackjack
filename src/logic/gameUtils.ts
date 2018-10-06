import { CardSuit, CardFace, CardFaceValue, CARD_VALUES } from '../constants';
import { Card } from '../types';

export class Deck {
    cards: Card[];

    constructor(shuffled = true) {
        this.cards = [];
        for (let cardSuit in CardSuit) {
            for (let i = 0; i < CARD_VALUES.length; i++) {
                let data: CardFaceValue = CARD_VALUES[i];
                let newCard: Card = {
                    suit: cardSuit,
                    face: data.face,
                    value: data.value,
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

export function scoreHand(hand: Card[]): number {
    let sum: number = 0, aces: number = 0;
    for (let i = 0; i < hand.length; i++) {
        sum += hand[i].value;
        if (hand[i].face == CardFace.Ace) {
            aces++;
        }
    }

    //Handle aces
    while (aces > 0 && sum > 21) {
        sum -= 10;
        aces--;
    }

    return sum;
}