
var addMulitListener = function(el, events, callback) {
  var e = events.split(' ');

  Array.prototype.forEach.call(el, function(element, i) {
    Array.prototype.forEach.call(e, function(event, i) {
      element.addEventListener(event, callback, false);
    });
  });
};

module.exports = function() {
  addMulitListener(document.querySelectorAll('.btn'), 'click touchstart', function(e) {
    var ripple = this.querySelector('.ripple');
    var eventType = e.type;
    /**
    * Ripple
    */
    if(ripple == null) {
      // Create ripple
      ripple = document.createElement('span');
      ripple.classList.add('ripple');

      this.insertBefore(ripple, this.firstChild);

      if(!ripple.offsetHeight && !ripple.offsetWidth) {
        var size = Math.max(e.target.offsetWidth, e.target.offsetHeight);
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
      }
    }

    ripple.classList.remove('animate');

    if(eventType == 'click') {
      var x = e.pageX;
      var y = e.pageY;
    } else if(eventType == 'touchstart') {
      var x = e.changedTouches[0].pageX;
      var y = e.changedTouches[0].pageY;
    }
    x = x - this.offsetLeft - ripple.offsetWidth / 2;
    y = y - this.offsetTop - ripple.offsetHeight / 2;

    ripple.style.top = y + 'px';
    ripple.style.left = x + 'px';
    ripple.classList.add('animate');
  });
}
