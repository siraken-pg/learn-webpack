/**
 * onload.js
 */
import $ from 'jquery';

window.onload = () => {
  const helloString = $('#hello');
  helloString.fadeOut();
  helloString.fadeIn();
};
