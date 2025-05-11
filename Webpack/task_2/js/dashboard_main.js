import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Add logo element
$('body').append('<div id="logo"></div>');

// Add elements to the page
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Counter function
let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the click event
$('button').on('click', _.debounce(updateCounter, 300));
