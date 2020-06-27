import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Clubs from "../clubs/Clubs";
import Home from "../home-page/Home";
import Studios from "../studios/Studios";
import ClubBesancon from "../club-besancon/ClubBesancon";
import MentionsLegales from "../footer/MentionsLegales";
import PolitiqueConf from "../footer/PolitiqueConf";
import ConditionsGenerVente from "../footer/ConditionsGenerVente";
import PlanSite from "../footer/PlanSite";
import Login from "../navbar/Login";
import Profile from "../profile/Profile";
class Content extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clubs" component={Clubs} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/besancon" component={ClubBesancon} />
          <Route exact path="/contact" component={() => "Contact"} />
          <Route exact path="/fiche-client" component={() => "FicheClient"} />
          <Route exact path="/mentions-legales" component={MentionsLegales} />
          <Route
            exact
            path="/politique-de-confidentialite"
            component={PolitiqueConf}
          />
          <Route
            exact
            path="/conditions-generale-de-vente"
            component={ConditionsGenerVente}
          />
          <Route exact path="/plan-de-site" component={PlanSite} />
          <Route path="/#" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/page-3" component={() => "page-3"} />
          <Route exact path="/page-4" component={() => "page-4"} />
          <Route exact path="/devis" component={() => "DevisClient"} />
        </Switch>
      </section>
    );
  }
}
export default Content;
