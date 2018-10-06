import { Deck, buildDeck, scoreHand } from '../logic';
import { CardFace, CardSuit, CARD_VALUES } from '../constants/BlackjackCards';
import { Card } from '../types';

describe('how a deck works', () => {
    describe('how the deck looks', () => {
        test('build deck returns full deck of cards', () => {
            expect(buildDeck().cards.length).toBe(52);
        });

        test('build deck returns 13 of each suit', () => {
            const cards: Card[] = buildDeck().cards;
            for (let suit in CardSuit){
                const count = cards.filter(c => c.suit === suit).length;
                expect(count).toBe(13);
            }
        });

        test('build deck returns 4 of each face', () => {
            const cards: Card[] = buildDeck().cards;
            for (let i = 0; i < CARD_VALUES.length; i++){
                const count = cards.filter(c => c.face === CARD_VALUES[i].face).length;
                expect(count).toBe(4);
            }
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

});
