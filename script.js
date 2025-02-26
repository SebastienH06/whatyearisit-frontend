fetch('https://whatyearisit-backend-three-hazel.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });