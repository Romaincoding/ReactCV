import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
                <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/competences" component={Knowledges}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio} />
                    <Route component={NotFound}/>

            </Switch>
        </BrowserRouter>

</div>

)
    ;
}

export default App;
