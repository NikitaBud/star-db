import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list';
import Row from '../row/row';

import './app.css';
import ItemDetails, { Record } from '../item-details/item-details';
import { 
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails 
} from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> : 
      null;

    const { getPerson, 
            getStarship, 
            getPersonImage, 
            getStarshipsImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails 
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage} >
          
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
          itemId={5}
          getData={getStarship}
          getImageUrl={getStarshipsImage}>

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <StarshipList />
            
            <PlanetList />

          </div>
      </ErrorBoundry>
    );
  }
}