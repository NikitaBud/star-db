import React from 'react';
import ItemList from '../item-list';
import {
    withData,
    withSwapiService,
    withChildFunction,
    compose } from '../hoc-helpers';



const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName =({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToPorops = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToPorops = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToPorops = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

withChildFunction(ItemList, renderName);

const PersonList = compose(
                        withSwapiService(mapPersonMethodsToPorops),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const PlanetList = compose(
                        withSwapiService(mapPlanetMethodsToPorops),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToPorops),
                        withData,
                        withChildFunction(renderModelAndName)
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};