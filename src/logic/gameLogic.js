import { cardFaces, cardSuits } from '../constants/BlackjackCards';

export class Deck {

    constructor(shuffleDeck = true){
        this.cards = [];
        for (let i = 0; i < cardSuits.length; i++){
            for (let j = 0; j < cardFaces.length; j++){
                this.cards.push({
                    suit: cardSuits[i],
                    face: cardFaces[j].face,
                    value: cardFaces[j].value,
                });
            }
        }
        if (shuffleDeck) {
            this.shuffle();
        }
    }

    drawCard(){
        return this.cards.shift(1);
    }

    shuffle(){
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

export function buildDeck(){
    return new Deck();
}

export function scoreHand(hand){
    let sum = 0, aces = 0;
    for (let i = 0; i < hand.length; i++){
       sum += hand[i].value; 
       if (hand[i].Face == "Ace"){
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