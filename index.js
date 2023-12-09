// pages/index.js
import React from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { calculateToll, setRoute } from '../redux/actions';
import TollGuide from '../components/TollGuide';
import RouteVisualization from '../components/RouteVisualization';
import TollDetails from '../components/TollDetails';

export default function Home() {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);

  const handleCalculateToll = () => {
    // Call TollGuru API to calculate toll
    // Update the Redux store with the calculated route
    // Dispatch setRoute action
  };

  return (
    <div>
      <Head>
        <title>Toll Calculator</title>
      </Head>

      <header>
        <h1>Toll Calculator</h1>
      </header>

      <main>
        <TollGuide />

        <RouteVisualization route={route} />

        <button id="calculateToll" onClick={handleCalculateToll}>
          Calculate Toll
        </button>

        <TollDetails />
      </main>
    </div>
  );
}
