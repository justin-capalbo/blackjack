import React from 'react';
import { Component } from 'react';
import { WelcomeBanner } from '../components/visual/Banner';
import { Button } from '../components/visual/Button';
import { scoreHand, buildDeck } from '../logic/gameLogic';
import { CardHolder } from '../components/card/CardHolder';
import styled from 'styled-components';

const BlackJackGame = styled.div`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
`;

const STATUS_LOSE = 'LOSE';
const STATUS_PLAYING = 'PLAYING';
const STATUS_WIN = 'WON';
const STATUS_PUSH = 'TIE';
const INITIAL_GAME_STATE = {
    playerHand: [],
    dealerHand: [],
    gameStatus: STATUS_PLAYING
};

export class BlackJackContainer extends Component {
    constructor(){
        super();
        this.handleHit = this.handleHit.bind(this);
        this.handleStay = this.handleStay.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            playerHand: [],
            dealerHand: [],
            gameStatus: STATUS_PLAYING,
            deck: buildDeck()
        };
    }
    
    handleReset(){
        this.setState({
            playerHand: [],
            dealerHand: [],
            gameStatus: STATUS_PLAYING,
            deck: buildDeck()
        });
    }

    handleHit(){
        let hand = this.state.playerHand;
        let deck = this.state.deck;

        hand.push(deck.drawCard());
        if (this.calculateScore(hand) > 21){
            this.setState( { gameStatus: STATUS_LOSE });
        }

        this.setState({ playerHand: hand, deck: deck});
    }

    handleStay(){
        let hand = this.state.dealerHand;
        let deck = this.state.deck;
        let gameStatus;

        while (true)
        {
            hand.push(deck.drawCard());

            const score = this.calculateScore(hand);
            const playerScore = this.calculateScore(this.state.playerHand);
            if (score > 21 || (score > 17 && score < playerScore)){
                gameStatus = STATUS_WIN;
                break;
            } else if (score > 17){
                gameStatus = score === playerScore ? STATUS_PUSH : STATUS_LOSE 
                break;
            }
        }

        this.setState({ 
            deck: deck, 
            dealerHand: hand, 
            gameStatus: gameStatus});
    }

    handleShuffle(){
        this.setState({ deck: this.state.deck.shuffle() });
    }

    calculateScore(hand){
        return hand && scoreHand(hand);
    }

    render() {
        const playerHand = this.state.playerHand || [];
        const dealerHand = this.state.dealerHand || [];
        return (
            <BlackJackGame className='blackjack-game'>
                <WelcomeBanner bannerText='Welcome to Blackjack' /> 
                <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                <Button onClick={this.handleHit}>Hit</Button>
                <Button onClick={this.handleStay}>Stay</Button>
                <Button onClick={this.handleReset}>Reset game</Button>
                <CardHolder cards={playerHand} score={this.calculateScore(playerHand)}/>
                <CardHolder cards={dealerHand} score={this.calculateScore(dealerHand)}/>
            </BlackJackGame>
        );
    }
}