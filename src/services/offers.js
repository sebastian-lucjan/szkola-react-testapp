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
