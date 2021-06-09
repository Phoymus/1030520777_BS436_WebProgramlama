import React, { Component } from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cardIndex: Math.floor(Math.random()*3),
            chances: 2,
            catFound: false,
            cards : ["./img/card.png","./img/card.png","./img/card.png"],
            won:null,
            lost:null
        }
    };

    handleClick =(imageId)=>{

        const { cards, cardIndex, chances, catFound} = this.state;
        const newCards = [...cards];

        if(cardIndex===imageId){
            newCards[imageId] = "./img/img1.jpg";
            this.setState({
                catFound: true
            })
            if (chances=>2){
                this.setState({
                    won:true
                })

            }

        }else {
            newCards[imageId] = "./img/img2.jpg";
            if (chances <= 1 && !catFound){
                this.setState({
                    lost:true
                })
            }
        }
        this.setState({
            cards:newCards,
            chances: chances-1
        });
    }

    newGame = () => {
        this.setState({
            cardIndex: Math.floor(Math.random()*3),
            chances: 2,
            catFound: false,
            cards : ["./img/card.png","./img/card.png","./img/card.png"],
            won:null,
            lost:null

        })
    }

    render(){
        if(this.state.won){

            return (
                <div>
                    <h2>Kazandın !</h2>
                    <img className={"card"} src={"./img/img1.jpg"}  alt={"cat"}/><br/>
                    <button center="true" onClick={this.newGame} className={"play"}>Yeni Oyun</button>
                </div>
            );
        }
        if (this.state.lost){
            return (
                <div>
                    <h2>Kaybettin :( Kedi'yi bulamadın.</h2>
                    <button center="true" onClick={this.newGame} className={"play"}>Yeni Oyun</button>
                </div>
            );
        }
        const { cards} = this.state;
        return (

            <div className="main-content">
                <p>{this.state.chances} Hakkınız Kaldı.</p>
                <img className="card" src={cards[0]} onClick={()=>this.handleClick(0)}/>
                <img className="card" src={cards[1]} onClick={()=>this.handleClick(1)}/>
                <img className="card" src={cards[2]} onClick={()=>this.handleClick(2)}/>
            </div>
        );
    }
}

