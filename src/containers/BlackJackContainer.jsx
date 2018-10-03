import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { GAME_STATUS } from '../constants/GameConstants';
import { WelcomeBanner } from '../components/visual/WelcomeBanner';
import { Button } from '../components/visual/Button';
import { CardHolder } from '../components/card/CardHolder';
import { scoreHand, buildDeck } from '../logic/gameLogic';
import { GameStatusDisplay } from '../components/visual/GameStatusDisplay';

const BlackJackGame = styled.div`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
`;

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
            gameStatus: GAME_STATUS.PLAYING,
            deck: buildDeck()
        };
    }
    
    handleReset(){
        this.setState({
            playerHand: [],
            dealerHand: [],
            gameStatus: GAME_STATUS.PLAYING,
            deck: buildDeck()
        });
    }

    handleHit(){
        let hand = this.state.playerHand;
        let deck = this.state.deck;

        hand.push(deck.drawCard());
        if (this.calculateScore(hand) > 21){
            this.setState( { gameStatus: GAME_STATUS.LOSE });
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

            if (score > 21){
                gameStatus = GAME_STATUS.WIN;
                break;
            } else if (score > 17){
                if (score < playerScore){
                    gameStatus = GAME_STATUS.WIN;
                    break;
                }

                gameStatus = score === playerScore ? GAME_STATUS.PUSH : GAME_STATUS.LOSE 
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
        const {
            playerHand, 
            dealerHand, 
            gameStatus
        } = this.state;
        const isPlaying = gameStatus === GAME_STATUS.PLAYING;

        return (
            <BlackJackGame className='blackjack-game'>
                <WelcomeBanner bannerText='Welcome to Blackjack' /> 
                <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                <Button onClick={this.handleReset}>Reset game</Button>
                <GameStatusDisplay gameStatus={this.state.gameStatus}></GameStatusDisplay>
                <Button onClick={isPlaying && this.handleHit}>Hit</Button>
                <Button onClick={isPlaying && this.handleStay}>Stand</Button>
                <CardHolder cards={playerHand} score={this.calculateScore(playerHand)}/>
                <CardHolder cards={dealerHand} score={this.calculateScore(dealerHand)}/>
            </BlackJackGame>
        );
    }
}