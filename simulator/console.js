function update_accel(e)
{
  x = e.offsetX - 50;
  x = x / 5;
  $(this).html(roundNumber(x,4));
  navigator.accelerometer._onAccelUpdate(
    parseFloat($('#accel_x').html()),
    parseFloat($('#accel_y').html()),
    parseFloat($('#accel_z').html())
  );
}

$(function() {
  $('#accel_x').mousemove( update_accel );  
  $('#accel_y').mousemove( update_accel);
  $('#accel_z').mousemove( update_accel);
});