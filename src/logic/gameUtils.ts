import { CardSuit, CARD_VALUES, CardFace } from '../constants/BlackjackCards';
import { Card } from '../types/Card';

export class Deck {
    cards: Card[];

    constructor(shuffled = true){
        this.cards = [];
        for (let cardSuit in CardSuit){
            for (let i = 0; i < CARD_VALUES.length; i++){
                let data = CARD_VALUES[i];
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

    drawCard(): Card{
        return this.cards.shift();
    }

    shuffle(): Deck{
        let shuffled = [];
        while (this.cards.length > 0){
            let index = Math.random() * this.cards.length;
            shuffled.push(this.cards.splice(index, 1)[0]);
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
       if (hand[i].face == CardFace.Ace){
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