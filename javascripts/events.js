// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
  $(e.target).text('Remove from Cart').removeClass('add btn-danger').addClass('remove btn-info'); // changes text after its in the cart
  // $(e.target).on('click', removeFromCart); // changes event listener to remove
};

const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish'); // finding closest parent with the class of "fish"
  $('#available').append(fishCard);
  $(e.target).text('Add to Cart').removeClass('remove btn-info').addClass('add btn-danger');
  // $(e.target).on('click', moveToCart);
};

const bindEvents = () => {
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  // $('button.add').click(moveToCart);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
