import $ from 'jquery';
import './header.css';

// Log message to console
console.log('Init header');

// Create and append logo and title
$('#header-container').append('<div id="logo"></div>');
$('#header-container').append('<h1>Holberton Dashboard</h1>');
