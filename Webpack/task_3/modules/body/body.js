import $ from 'jquery';
import _ from 'lodash';
import './body.css';

// Add elements to the page
$('#body-container').append('<p>Dashboard data for the students</p>');
$('#body-container').append('<button>Click here to get started</button>');
$('#body-container').append('<p id="count"></p>');

// Counter function
let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the click event
$('#body-container button').on('click', _.debounce(updateCounter, 300));
