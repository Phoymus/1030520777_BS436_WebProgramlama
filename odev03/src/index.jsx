/*
 * Copyright (c) 2021 Osman Incir
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program.
 * If not see http://www.gnu.org/licenses/ or write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @author Osman Incir osmanincir.bm@gmail.com https://github.com/Phoymus
 * @version 1.0
 * Github project home page: https://github.com/Phoymus/1030520777_BS436_WebProgramlama
 */

import React from "react";
import ReactDOM from "react-dom";
import {getRandomImages} from "./images.js"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            disabled0: false,
            disabled1: false,
            disabled2: false,
            catFound: false,
            chances: 2,
            resultMessage : "Kedi kartını bulmak için kartın üzerine tıklamalısın",
            image : getRandomImages(),
            cards : [
                {path:"./images/card.png"},
                {path:"./images/card.png"},
                {path:"./images/card.png"}]
        }
    };

    handleClick =(imageId)=>{

        this.setState({
            image: getRandomImages(),
            chances : this.state.chances-1
        })
        let newPath = this.state.image.src;
        if (this.state.image.class === "cat"){
            this.setState({
                catFound: true
            })
        }

        if (imageId === "0"){
            if (this.state.disabled0) {
                return;
            }
            this.setState({disabled0: true});
            this.setState(({cards}) => ({
                cards: [
                    ...cards.slice(0,0),
                    {
                        ...cards[imageId],
                        path: newPath,
                    },
                    ...cards.slice(1)
                ]
            }));
        }
        if (imageId === "1"){
            if (this.state.disabled1) {
                return;
            }
            this.setState({disabled1: true});
            this.setState(({cards}) => ({
                cards: [
                    ...cards.slice(0,1),
                    {
                        ...cards[imageId],
                        path: newPath,
                    },
                    ...cards.slice(1)
                ]
            }));
        }
        if (imageId === "2"){
            if (this.state.disabled2) {
                return;
            }
            this.setState({disabled2: true});
            this.setState(({cards}) => ({
                cards: [
                    ...cards.slice(0,2),
                    {
                        ...cards[imageId],
                        path: newPath,
                    },
                    ...cards.slice(1)
                ]
            }));
        }

        if (this.state.chances >= 0 && this.state.catFound){
            this.setState({resultMessage:"Kazandın!!! Tebrik Ederiz :) Yeni bir oyun oynamak istersen buraya"
                    +"tıklayabilirsin."})
        }
        else if(this.state.chances < 1){
            this.setState({resultMessage:"Kaybettin:( Yeni bir oyun oynamak istersen "
                    +"buraya tıklayabilirsin."})
        }
    }

    render(){
        return (<div className="main-content">

                <h2>Kedi Bulmaca</h2>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınanacaktır.</p>
                <img disabled={this.state.disabled0} id="0" className="card" src={this.state.cards[0].path} onClick={()=>this.handleClick("0")}/>
                <img disabled={this.state.disabled1} id="1" className="card" src={this.state.cards[1].path} onClick={()=>this.handleClick("1")}/>
                <img disabled={this.state.disabled2} id="2" className="card" src={this.state.cards[2].path} onClick={()=>this.handleClick("2")}/>
                <div className="message">
                    <p id="areaId">{this.state.resultMessage}</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))