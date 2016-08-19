document.getElementsByClassName('js-floor-button')[0].onclick = function() {
  if (this.dataset.floor === 'space') {
    document.body.className = 'space-mode';

    setTimeout(function () {
      document.getElementsByClassName('js-elevator--floor-indicator')[0].innerHTML = 'SPACE!';
    }, 7500);
  }
};
