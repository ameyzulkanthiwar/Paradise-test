import React, { Component , Fragment} from "react";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

class Main extends Component{

    render(){
        return(
            <Fragment>
                 <h1>Paradise Test</h1>


                    <Router>
                        <div>
                            <ul>
                                <li>
                                <Link to="/paragraph"> paragraph </Link>
                                </li>
                                <li>
                                <Link to="/cards"> Cards </Link>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path='/paragraph' component={QuestionOne}></Route>
                            <Route exact path='/cards' component={QuestionTwo}></Route>
                        </Switch>
                            
                        </Router>

               
               
            </Fragment>
        );
    }
    
}


export default Main;