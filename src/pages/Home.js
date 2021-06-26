import { useState, useEffect } from 'react';
import '../App.css';

import { OfferListItem } from '../components/OfferListItem';

import api from '../services'; //podejście barrels - główny plik

function Home() {
  // const selectedOffer = 'Cozy flat';

  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState('Cozy flat');
  const [data, setData] = useState([]);
  // 0 - variable
  // 1 - callback

  useEffect(() => {
    setSelectedOffer('🐼 🐼 🐼');
  }, []);

  useEffect(() => {
    setData(api.fetchPosts());
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.fetchOffers();
        setOffers(data);
      } catch (error) {
        console.log(error);
      }
    })();
    // fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>

      {offers.map((elem) => (
        <OfferListItem
          key={`offer-${elem.id}`}
          // offerObj={elem}
          id={elem.id}
          name={elem.name}
          street={elem.street}
          city={elem.city}
          country={elem.country}
          cover={elem.cover}
          handleClick={setSelectedOffer}
        />
      ))}
    </div>
  );
}

export default Home;
