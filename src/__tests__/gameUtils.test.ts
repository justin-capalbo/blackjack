import { Deck, buildDeck, scoreHand, blackjackValueOf } from '../logic';
import { CardFace, CardSuit } from '../constants/BlackjackCards';
import { Card } from '../types';

describe('how a deck works', () => {
    describe('how the deck looks', () => {
        let deck: Deck;

        beforeAll(() => {
            deck = buildDeck();
        });

        test('build deck returns full deck of cards', () => {
            expect(deck.cards.length).toBe(52);
        });

        test('build deck returns 13 of each suit', () => {
            const cards: Card[] = deck.cards;
            for (let suit in CardSuit){
                const count = cards.filter(c => c.suit === suit).length;
                expect(count).toBe(13);
            }
        });

        test('build deck returns 4 of each face', () => {
            const cards: Card[] = deck.cards;
            for (let face in CardFace){
                const count = cards.filter(c => c.face === face).length;
                expect(count).toBe(4);
            }
        });

        test('deck has the proper total value', () => {
            //Four of each face, with Aces counting as 11
            const total: number = deck.cards
                .map(c => blackjackValueOf(c))
                .reduce((sum, val) => sum + val);

            expect(total).toBe(380);
        });
    });

    describe('drawing cards', () => {
        test('drawing a card returns the assumed top card of the deck', () => {
            const deck = buildDeck();
            const topCard = deck.peekTop();
            expect(deck.drawCard()).toEqual(topCard);
        });
    });
});

describe('scoring a hand', () =>  {
    const sp = CardSuit.Spades; 

    test('face cards are worth 10 each', () => {
        const faceCards: CardFace[] = [ CardFace.Jack, CardFace.Queen, CardFace.King ];
        faceCards.forEach(f => {
            const hand: Card[] = [ { face: f, suit: sp } ];
            expect(scoreHand(hand)).toBe(10);
        });
    });

    test('score is the sum of parts', () => {
        const hand: Card[] = [ 
            { face: CardFace.Two, suit: sp },
            { face: CardFace.Three, suit: sp },
            { face: CardFace.Four, suit: sp },
            { face: CardFace.Five, suit: sp },
            { face: CardFace.Six, suit: sp },
            { face: CardFace.Seven, suit: sp },
            { face: CardFace.Eight, suit: sp },
            { face: CardFace.Nine, suit: sp },
            { face: CardFace.Ten, suit: sp }
        ];
        expect(scoreHand(hand)).toBe(54);
    });

    test('ace is worth 11 if the total is 21 or less', () => {
        const hand: Card[] = [ 
            { face: CardFace.Two, suit: sp },
            { face: CardFace.Ace, suit: sp },
        ];
        expect(scoreHand(hand)).toBe(13);
    });

    test('aces each subtract 10 while the total is over 21', () => {
        const hand: Card[] = [ 
            { face: CardFace.King, suit: sp },
            { face: CardFace.King, suit: sp },
            { face: CardFace.Ace, suit: sp },
        ];
        expect(scoreHand(hand)).toBe(21);
    });

    test('two aces can have different values', () => {
        const hand: Card[] = [ 
            { face: CardFace.Nine, suit: sp },
            { face: CardFace.Ace, suit: sp },
            { face: CardFace.Ace, suit: sp },
        ];
        expect(scoreHand(hand)).toBe(21);
    });
});
