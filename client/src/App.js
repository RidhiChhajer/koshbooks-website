import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './components/landingPage/lp.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => (<Landing />)} />
        {/* <Route exact path='/details' component={Details} />
        <Route exact path='/auth' component={() => (!user?.user ? <Auth /> : <Redirect to='/loggedin' />)} />
        <Route exact path='/loggedin' component={StudentView} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
