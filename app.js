if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => {
      console.log('sw registerd');
      // alert('sw registerd');
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
  const div = document.createElement('div');
  div.innerText('active');
  document.appendChild(div);
});

document.addEventListener('resume', function (event) {
  alert('resume');
  const div = document.createElement('div');
  div.innerText('resume');
  document.appendChild(div);
});

document.addEventListener('visibilitychange', function (event) {
  if (!event.target.hidden) {
    alert('visibilitychange');
    const div = document.createElement('div');
    div.innerText('visibilitychange');
    document.appendChild(div);
  }
});
