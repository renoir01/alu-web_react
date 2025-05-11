import $ from 'jquery';

// Add three different paragraphs to the page body
$(document).ready(function() {
  // Create and append the three paragraphs
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});
