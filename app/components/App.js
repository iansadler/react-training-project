var React  = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./nav');
var Home = require('./home');
var Battle = require('./battle');
var Popular = require('./popular');

class App extends React.Component {
    render() {
        return (

            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function () {
                            return <p>404 - page not found</p>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;
