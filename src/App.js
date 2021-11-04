import "./App.css";
import Proposals from "./pages/proposals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GroupList from "./components/groupList";
import GroupPage from "./components/groupPage";
import { PageTransition } from "@steveeeie/react-page-transition";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/groups/:id" component={GroupPage} />
                    <Route path="/proposals" component={Proposals} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <h1
                className="w-75"
                style={{ fontFamily: "Montserrat", margin: 30 }}
            >
                <strong>Your Groups</strong>
            </h1>
            <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/images/avatar1.jpeg`}
                alt="..."
                style={{
                    margin: 30,
                    width: 36,
                    height: 36,
                }}
            />
        </div>
        <GroupList />
    </div>
);

export default App;
