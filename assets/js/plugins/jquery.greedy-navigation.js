/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function isMobileView() {
  return window.innerWidth < 768;
}

function updateNav() {
  // On mobile, always show the hamburger button (CSS handles item visibility)
  if (isMobileView()) {
    $btn.removeClass('hidden');
    // Don't move items around on mobile - CSS controls visibility
    return;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list (only collapsible items)
    var $lastCollapsible = $vlinks.children('.masthead__menu-item--collapsible').last();
    if ($lastCollapsible.length) {
      $lastCollapsible.prependTo($hlinks);
    }

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list (only non-mobile-only items)
      var $firstMovable = $hlinks.children('.masthead__menu-item--collapsible').first();
      if ($firstMovable.length) {
        $firstMovable.appendTo($vlinks);
        breaks.pop();
      }
    }

    // Hide the dropdown btn if no overflow items (but check for mobile-only items)
    var $mobileOnlyItems = $hlinks.children('.masthead__menu-item--mobile-only');
    if(breaks.length < 1 && $mobileOnlyItems.length === 0) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();