import React from "react";
import ReactDOM from "react-dom";
import {Game} from "./Game";
import {Home} from "./home"
import {HashRouter} from "react-router-dom";
import { Route, Switch} from "react-router";

const notFound =() =>{
    return(
        <>
            <h2>Sayfa bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfa şu anda ulaşılınamıyor. Lütfen daha sonra tekrar deneyiniz.
            </p>
        </>
    );
}

export const App = ()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/game' component={Game}/>
                <Route exact path="/" component={Home}/>
                <Route component={notFound}/>
            </Switch>
        </HashRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));