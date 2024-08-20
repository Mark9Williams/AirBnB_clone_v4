// static/scripts/2-hbnb.js
/* global $ */
$(document).ready(function () {
  // Create a dictionary to store selected amenity IDs
  const selectedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    // Get the amenity ID and name from the checkbox
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      // If checked, add the amenity ID to the dictionary
      selectedAmenities[amenityId] = amenityName;
    } else {
      // If unchecked, remove the amenity ID from the dictionary
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag with the list of selected amenity names
    const selectedNames = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(selectedNames || ' ');
  });

  // Check the API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  }).fail(function () {
    // If the request fails (e.g., server is down), remove the 'available' class
    $('#api_status').removeClass('available');
  });
});
