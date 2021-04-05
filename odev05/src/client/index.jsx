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