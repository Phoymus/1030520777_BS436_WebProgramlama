/*
 * Copyright (c) 2021 Osman Incir
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author Osman Incir osmanincir.bm@gmail.com
 * Github project home page: https://github.com/oincir/1030520777_BS436_WebProgramlama
 */

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            cardIndex: Math.floor(Math.random()*3),
            chances: 0,
            catFound: false,
            resultMessage : undefined,
            cards : ["./images/card.png","./images/card.png","./images/card.png"]
        }
    };

    handleClick =(imageId)=>{

        const { cards, cardIndex, chances, catFound} = this.state;
        const newCards = [...cards];

        if(cardIndex===imageId){
            newCards[imageId] = "./images/img1.jpg";
            this.setState({
                catFound: true
            })
            if (chances<2){
                this.setState({
                    resultMessage :"Kazandınız :)"
                })
            }

        }else {
            newCards[imageId] = "./images/img2.jpg";
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

ReactDOM.render(<App/>,document.getElementById("root"));