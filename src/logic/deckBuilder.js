import { cardFaces, cardSuits } from '../constants/BlackjackCards';

export function getDeck (n = 1){
    let deck = [];
    for (let deckNum = 0; deckNum < n; deckNum++){
        for (let i = 0; i < cardSuits.length; i++){
            for (let j = 0; j < cardFaces.length; j++){
                deck.push({
                    suit: cardSuits[i],
                    face: cardFaces[j].face,
                    value: cardFaces[j].value,
                });
            }
        }
    }    
    return deck;
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