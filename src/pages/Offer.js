import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchOffer } from '../services/offers';

function OfferPage() {
  const { offerId } = useParams();
  const history = useHistory();
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOffer(offerId);
        setOffer(data);
      } catch (error) {
        console.error(`UI Error ${error}`);
      }
    }
    fetchData();
  }, [offerId]);

  function handleClick() {
    if (offer) {
      history.push(`/offer/${offer.id !== '4' ? parseInt(offer.id) + 1 : 1}`);
    }
  }

  const Indicator = () => <div>Loading...</div>;

  const Content = ({ offer, handleClick }) => {
    const { street, city, country } = offer;

    return (
      <>
        <h1>
          #{`${offerId}`} {offer.name}
        </h1>
        <p>
          {street}, {city}
        </p>
        <p>{country}</p>
        <button onClick={handleClick}>Next offer --></button>)
      </>
    );
  };

  const renderButton = () => {
    return <button>Click Me</button>;
  };

  return (
    <div>
      {offer ? (
        <Content offer={offer} handleClick={handleClick} />
      ) : (
        <Indicator />
      )}

      {renderButton()}
    </div>
  );
}

export default OfferPage;
