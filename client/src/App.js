import Landing from './components/landingPage/landingReact';
import Explore from './components/explore/exploreReact';
import Login from './components/login/loginReact';
import BookDetails from './components/bookDetails/bookDetails'
import Cart from './components/cart/cartReact'
import Ccu from './components/ccu/ccuReact'
import Profile from './components/profile/profileReact'
import Wishlist from './components/wishlist/wishlistReact'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/auth' component={Login} />
        <Route exact path='/bookdetails' component={BookDetails} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/ccu' component={Ccu} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/wishlist' component={Wishlist} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
