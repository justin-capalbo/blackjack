import React from 'react';
import { Component } from 'react';
import styled from 'react-emotion';
import { WelcomeBanner } from '../components/visual/WelcomeBanner';
import { Button } from '../components/visual/Button';
import { CardHolder } from '../components/card/CardHolder';
import { GameStatusDisplay } from '../components/visual/GameStatusDisplay';
import { Card } from '../types/Card';
import { scoreHand, buildDeck, Deck } from '../logic/gameUtils';
import { GameStatus } from '../constants/GameConstants';

const BlackJackGame = styled('div')`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
`;

interface BlackJackState {
    playerHand: Card[],
    dealerHand: Card[],
    gameStatus: string,
    deck: Deck
}

export class BlackJackContainer extends Component<{}, BlackJackState>{
    constructor(props) {
        super(props);
        this.handleHit = this.handleHit.bind(this);
        this.handleStand = this.handleStand.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            playerHand: [],
            dealerHand: [],
            gameStatus: GameStatus.PLAYING,
            deck: buildDeck()
        };
    }
    
    handleReset(): void {
        this.setState({
            playerHand: [],
            dealerHand: [],
            gameStatus: GameStatus.PLAYING,
            deck: buildDeck()
        });
    }

    handleHit(): void {
        let hand = this.state.playerHand;
        let deck = this.state.deck;

        hand.push(deck.drawCard());

        const score = this.calculateScore(hand);
        this.setState({ 
            deck: deck,
            playerHand: hand, 
            gameStatus: score > 21 ? GameStatus.LOSE : this.state.gameStatus
        });
    }

    scoreGame(dealerScore: number, playerScore: number): GameStatus {
        if (dealerScore > 21){
            return GameStatus.WIN;
        } 
        
        if (dealerScore > 17){
            if (dealerScore < playerScore){
                return GameStatus.WIN;
            }

            return dealerScore === playerScore ? GameStatus.PUSH : GameStatus.LOSE 
        } 
        return GameStatus.PLAYING;
    }

    handleStand(): void {
        let hand = this.state.dealerHand;
        let deck = this.state.deck;
        let gameStatus: GameStatus;

        while (true)
        {
            hand.push(deck.drawCard());

            const score = this.calculateScore(hand);
            const playerScore = this.calculateScore(this.state.playerHand);

            gameStatus = this.scoreGame(score, playerScore);
            if (gameStatus !== GameStatus.PLAYING){
                break;
            }
        }

        this.setState({ 
            deck: deck, 
            dealerHand: hand, 
            gameStatus: gameStatus});
    }


    handleShuffle(): void {
        this.setState({ deck: this.state.deck.shuffle() });
    }

    calculateScore(hand: Card[]): number {
        return hand && scoreHand(hand);
    }

    render() {
        const {
            playerHand, 
            dealerHand, 
            gameStatus
        } = this.state;
        const isPlaying = gameStatus === GameStatus.PLAYING;

        return (
            <BlackJackGame className='blackjack-game'>
                <WelcomeBanner bannerText='Welcome to Blackjack' /> 
                <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                <Button onClick={this.handleReset}>Reset game</Button>
                <GameStatusDisplay gameStatus={this.state.gameStatus}></GameStatusDisplay>
                <Button onClick={isPlaying ? this.handleHit : undefined}>Hit</Button>
                <Button onClick={isPlaying ? this.handleStand : undefined}>Stand</Button>
                <CardHolder cards={playerHand} score={this.calculateScore(playerHand)}/>
                <CardHolder cards={dealerHand} score={this.calculateScore(dealerHand)}/>
            </BlackJackGame>
        );
    }
}