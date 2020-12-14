if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => {
      console.log('sw registerd');
      alert('sw registerd');
    })
    .catch((err) => console.log('error ', err));

  setTimeout(() => {
    const img = new Image();

    img.src = '/sw-sample/dog.png';
    document.body.appendChild(img);
  }, 2000);
}

document.addEventListener('active', function (event) {
  alert('active');
});

document.addEventListener('resume', function (event) {
  alert('resume');
});

document.addEventListener('visibilitychange', function (event) {
  alert('visibilitychange');
});
