import React, { Fragment } from "react";
import AppHeader from "~/components/AppHeader/AppHeader";
import AppMain from "~/components/AppMain/AppMain";
import GoToTop from "~/components/GoToTop/GoToTop";

const App = (props) => (
  <Fragment>
    <AppHeader />
    <AppMain />
    <GoToTop />
  </Fragment>
);

export default App;
