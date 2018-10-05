export enum CardSuit {
    Spades = "Spades",
    Clubs = "Clubs",
    Hearts = "Hearts",
    Diamonds = "Diamonds"
} 

export enum CardFace {
    Two = "Two",
    Three = "Three",
    Four = "Four",
    Five = "Five",
    Six = "Six",
    Seven = "Seven",
    Eight = "Eight",
    Nine = "Nine",
    Ten = "Ten",
    Jack = "Jack",
    Queen = "Queen",
    King = "King",
    Ace = "Ace"
};

export type CardFaceValue = {
    value: number,
    face: CardFace
}

export const CARD_VALUES: CardFaceValue[] = [
    { value: 2, face: CardFace.Two },
    { value: 3, face: CardFace.Three },
    { value: 4, face: CardFace.Four },
    { value: 5, face: CardFace.Five },
    { value: 6, face: CardFace.Six },
    { value: 7, face: CardFace.Seven },
    { value: 8, face: CardFace.Eight },
    { value: 9, face: CardFace.Nine },
    { value: 10, face: CardFace.Ten },
    { value: 10, face: CardFace.Jack },
    { value: 10, face: CardFace.Queen },
    { value: 10, face: CardFace.King },
    { value: 11, face: CardFace.Ace }
]
