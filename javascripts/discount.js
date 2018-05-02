const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find('.price');
    const basePrice = basePriceElem.html() * 1;
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice); // passing setter to put newPrice in html
  });
};

module.exports = applySale;
