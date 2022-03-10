/**
 * onload.js
 */
import $ from 'jquery';

window.onload = () => {
  const el = $('#hello');
  el.fadeOut();
  el.fadeIn();
};
