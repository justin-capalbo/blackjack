import { cardFaces, cardSuits } from '../constants/BlackjackCards';

export const shuffle = function (deck) {
    let shuffled = [];
    while (deck.length > 0){
        let index = Math.random() * deck.length;
        shuffled.push(deck.splice(index, 1)[0]);
    }
    return shuffled;
}

export function getDeck (shuffleDeck = true) {
    let deck = [];
    for (let i = 0; i < cardSuits.length; i++){
        for (let j = 0; j < cardFaces.length; j++){
            deck.push({
                suit: cardSuits[i],
                face: cardFaces[j].face,
                value: cardFaces[j].value,
            });
        }
    }
    return shuffleDeck ? shuffle(deck) : deck;
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