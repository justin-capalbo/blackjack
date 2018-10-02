import React from 'react';
import { Component } from 'react';
import { WelcomeBanner } from '../components/visual/Banner';
import { Button } from '../components/visual/Button';
import { getDeck, shuffle } from '../logic/gameLogic';
import { CardHolder } from '../components/card/CardHolder';

export class BlackJackContainer extends Component {
    constructor(){
        super();
        this.handleDraw = this.handleDraw.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.state = { };
    }

    componentDidMount(){
        this.setState({
            playing: false,
            deck: getDeck(),
            playerHand: [],
            dealerHand: []
        });
    }

    handleDraw(){
        const card = this.state.deck.shift(1);
        const newHand = this.state.playerHand;
        newHand.push(card);
        this.setState({ playerHand: newHand});
    }

    handleShuffle(){
        this.setState({ deck: shuffle(this.state.deck) });
    }

    render() {
        const playerHand = this.state.playerHand || [];
        return (
            <div className='blackjack-game'>
                <WelcomeBanner bannerText='Welcome to Blackjack' /> 
                <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                <Button onClick={this.handleDraw}>Draw a card</Button>
                <CardHolder cards={playerHand} />
            </div>
        );
    }
}