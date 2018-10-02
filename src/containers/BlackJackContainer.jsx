import React from 'react';
import { Component } from 'react';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { getDeck, shuffle } from '../logic/gameLogic';
import { CardBase } from '../components/card/CardBase';

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
        const playerHand = this.state.playerHand;
        return (
            <div className='blackjack-game'>
                <Banner bannerText='Welcome to Blackjack' /> 
                <Button onClick={this.handleShuffle}>Shuffle the deck</Button>
                <Button onClick={this.handleDraw}>Draw a card</Button>
                {
                    playerHand && 
                    playerHand.map((data, i) => 
                        <CardBase card={data} key={i}></CardBase>)
                }
            </div>
        );
    }
}