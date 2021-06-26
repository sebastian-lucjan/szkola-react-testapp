export const fetchOffers = async () => {
  try {
    const response = await fetch('/data/offers.json');
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
