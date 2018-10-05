import { CARD_FACES, CARD_SUITS, CARD_LABELS } from '../constants/BlackjackCards';
import { Card } from '../types/Card';

export class Deck {
    cards: Card[];

    constructor(shuffleDeck = true){
        this.cards = [];
        for (let i = 0; i < CARD_SUITS.length; i++){
            for (let j = 0; j < CARD_FACES.length; j++){
                this.cards.push({
                    suit: CARD_SUITS[i],
                    face: CARD_FACES[j].face,
                    value: CARD_FACES[j].value,
                });
            }
        }
        if (shuffleDeck) {
            this.shuffle();
        }
    }

    drawCard(): Card{
        return this.cards.shift();
    }

    shuffle(): Deck{
        const cards = this.cards;
        let shuffled = [];
        while (cards.length > 0){
            let index = Math.random() * cards.length;
            shuffled.push(cards.splice(index, 1)[0]);
        }
        this.cards = shuffled;
        return this;
    }
}

export function buildDeck(): Deck{
    return new Deck();
}

export function scoreHand(hand: Card[]): number{
    let sum = 0, aces = 0;
    for (let i = 0; i < hand.length; i++){
       sum += hand[i].value; 
       if (hand[i].face == CARD_LABELS.CARD_ACE){
           aces++;
       }
    }
    
    //Handle aces
    while (aces > 0 && sum > 21){
        sum -= 10;
        aces--;
    }
    
    return sum;
}