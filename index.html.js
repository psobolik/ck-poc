// This is the list of image URLs; you would probably use a
// relative link. like './img/BA_roll03_03.jpg'
var imageUrls = [
  'http://changgeon.com/img/BA_roll03_03.jpg',
  'http://changgeon.com/img/BA_roll_07_38_low.jpg',
  'http://changgeon.com/img/BA_roll_05_19_low.jpg',
  'http://changgeon.com/img/BA_roll_01_17.jpg',
  'http://changgeon.com/img/BA_roll_02_38_low.jpg',
  'http://changgeon.com/img/BA_roll_04_53_low.jpg',
  'http://changgeon.com/img/BA_roll_09_40_low.jpg'
]

window.onload = function () {
  // Get all the elements whose name is 'imageSpan'
  var imageSpans = document.getElementsByName('imageSpan')
  // Set the click handler of each one to the handler function
  imageSpans.forEach(function (t) {
    t.onclick = menuItemClickHandler
  })
  // Select the first image
  selectImage(imageSpans[0])
}

function menuItemClickHandler(ev) {
  ev.preventDefault()
  selectImage(this)
}

function selectImage(menuItem) {
  // Get the element whose id is 'image'
  var image = document.getElementById('image')
  // Get the index associated with the menu item that was clicked
  var index = menuItem.getAttribute('data-index')
  // Set the src attribute of the 'image' element to the correct image URL
  image.setAttribute('src', imageUrls[index])
  // Set the label's text to the same value as the clicked item's text
  var label = document.getElementById('label')
  label.innerText = menuItem.innerText
}
