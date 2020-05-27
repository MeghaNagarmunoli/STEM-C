import React, {useState, useEffect} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Workspace from "./views/Workspace/Workspace"
import Topics from "./views/Topics/Topics"
import NotFound from "./views/NotFound"

const App = () => {
    const [selectedActivity, setSelectedActivity] = useState();

    useEffect(() => {
        console.log("Selected activity has changed to: ", selectedActivity);
    }, [selectedActivity])
    return(
        <div>
            <Switch>
                <Route exact path={"/"} render={(props) => <Topics setSelectedActivity={setSelectedActivity} /> } />
                <Route path={"/workspace/:projectId"} render = { (props) => <Workspace selectedActivity={selectedActivity} /> } />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App;