$(document).ready(function () {

  // Bootstrappopover function
  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })

  // Create a timeline with default parameters
  const tl = anime.timeline({
    easing: 'easeOutExpo',
  })

  tl.add({
    targets: '#from-right',
    translateX: [75, 0],
    opacity: [0, 1],
  }).add({
    targets: '#from-left',
    translateX: [-75, 0],
    opacity: [0, 1]
  }, 200)
  .add({
    targets: '#from-bottom',
    translateY: [75, 0],
    opacity: [0, 1],
  }, 200)

  anime({
    targets: '#ollie',
    // opacity: [.5, 1],
    translateY: [-5, 0, -5],
    fontSize: [35, 30],
    delay: 3000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#arrow',
    // opacity: [.5, 1],
    translateY: [-7,0,-7],
    delay: 200,
    // direction: 'alternate',
    loop: true
  });

  const ollie = $("#ollie")

  ollie.click(()=>{
    console.log("clicked!");
  })
});