import React from 'react';
import { Component } from 'react';
import { WelcomeBanner } from '../components/visual/Banner';
import { Button } from '../components/visual/Button';
import { getDeck, shuffle, scoreHand } from '../logic/gameLogic';
import { CardHolder } from '../components/card/CardHolder';
import styled from 'styled-components';

const BlackJackGame = styled.div`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
`;

const Menu = styled.div`
`;

export class BlackJackContainer extends Component {
    constructor(){
        super();
        this.handleDraw = this.handleDraw.bind(this);
        this.dealerDraw = this.dealerDraw.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { };
    }

    componentDidMount(){
        this.handleReset();
    }

    handleDraw(){
        const card = this.state.deck.shift(1);
        const newHand = this.state.playerHand;
        newHand.push(card);
        this.setState({ playerHand: newHand});
    }

    dealerDraw(){
        const card = this.state.deck.shift(1);
        const newHand = this.state.dealerHand;
        newHand.push(card);
        this.setState({ dealerHand: newHand});
    }

    handleShuffle(){
        this.setState({ deck: shuffle(this.state.deck) });
    }

    handleReset(){
        this.setState({ 
            deck: getDeck(),
            playerHand: [],
            dealerHand: []
        })
    }
    
    calculateScore(hand){
        return scoreHand(hand);
    }

    render() {
        const playerHand = this.state.playerHand || [];
        const dealerHand = this.state.dealerHand || [];
        return (
            <BlackJackGame className='blackjack-game'>
                <Menu>
                    <WelcomeBanner bannerText='Welcome to Blackjack' /> 
                    <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                    <Button onClick={this.handleDraw}>Draw a card</Button>
                    <Button onClick={this.dealerDraw}>Dealer draw</Button>
                    <Button onClick={this.handleReset}>Reset game</Button>
                </Menu>
                <CardHolder cards={playerHand} score={this.calculateScore(playerHand)}/>
                <CardHolder cards={dealerHand} score={this.calculateScore(dealerHand)}/>
            </BlackJackGame>
        );
    }
}