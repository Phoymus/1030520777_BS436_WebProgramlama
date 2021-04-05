import React, { Component } from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cardIndex: Math.floor(Math.random()*3),
            chances: 0,
            catFound: false,
            resultMessage : undefined,
            cards : ["./img/card.png","./img/card.png","./img/card.png"]
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
            if (chances<2){
                this.setState({
                    resultMessage :"Kazandınız :)"
                })
            }

        }else {
            newCards[imageId] = "./img/img2.jpg";
            if (chances >= 1 && !catFound){
                this.setState({
                    resultMessage: "Kaybettiniz :("
                })
            }
        }
        this.setState({
            cards:newCards,
            chances: chances+1
        });


    }

    newGame = () => {
        window.location.reload()
    }
    render(){
        const { cards, resultMessage } = this.state;
        return (<div className="main-content">

                <h2>Kedi Bulmaca</h2>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınanacaktır.</p>
                <img className="card" src={cards[0]} onClick={()=>this.handleClick(0)}/>
                <img className="card" src={cards[1]} onClick={()=>this.handleClick(1)}/>
                <img className="card" src={cards[2]} onClick={()=>this.handleClick(2)}/>
                <div className="message">
                    <span>{resultMessage?resultMessage:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</span>
                    {resultMessage && <span > Yeni bir oyun oynamak istersen <span onClick={this.newGame} className='link'>buraya</span> tıklayabilirsin. </span>}
                </div>
            </div>
        );
    }
}

