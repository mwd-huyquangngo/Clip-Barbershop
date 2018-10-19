/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from 'features/HomePage/Loadable';
import NotFoundPage from 'features/NotFoundPage/Loadable';
import NavBar from 'packages/NavBar';
import Header from 'packages/Header';
import Footer from 'packages/Footer';
import Booking from 'features/Booking/Loadable';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <NavBar />

      <Header />

      {/* <!-- Page Content --> */}
      <section className="py-5">
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/booking" component={Booking} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </section>

      <Footer />
    </div>
  );
}
