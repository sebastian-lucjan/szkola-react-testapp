export const fetchOffers = async () => {
  try {
    const response = await fetch('/data/offers.json');
    const data = response.json(); //dodać await ??

    //modify your data here if you want

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOffer = async (offerId) => {
  try {
    const response = await fetch('/data/offers.json');
    const data = await response.json(); //dodać await ??
    const filteredResults = data.filter(
      ({ id }) => parseInt(id, 10) === parseInt(offerId, 10)
    );
    if (filteredResults.length) {
      return filteredResults[0];
    } else {
      throw Error('Coś nie tak!');
    }
  } catch (_error) {
    throw Error('Coś nie tak!');
  }
};
