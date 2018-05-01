(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
};

const bindEvents = () => {
  $('button.add').click(moveToCart);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;

},{}],2:[function(require,module,exports){
const bindEvents = require('./events');

bindEvents();

},{"./events":1}]},{},[2]);
