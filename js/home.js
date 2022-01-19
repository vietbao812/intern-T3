$(document).ready(function() {
  $('.header').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: true,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
    })
});

$(document).on('click', '.language', function() {
  $(this).addClass('active').siblings().removeClass('active')
})
$(document).on('click', '.event-list .event-item', function() {
  $(this).addClass('active').siblings().removeClass('active')
})
$(document).on('click', '.category', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

function changeEventList(type, element) {
  document.getElementById(type).style.display = 'flex';

  switch (type) {
    case 'all':
      document.getElementById('tindanhkhoi').style.display = 'none';
      document.getElementById('tinthitruong').style.display = 'none';
      break;
    case 'tindanhkhoi':
      document.getElementById('all').style.display = 'none'
      document.getElementById('tinthitruong').style.display = 'none'
      break;
    case 'tinthitruong':
      document.getElementById('tindanhkhoi').style.display = 'none'
      document.getElementById('all').style.display = 'none'
      break;
  }
}