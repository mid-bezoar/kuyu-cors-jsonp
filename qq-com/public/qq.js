const request = new XMLHttpRequest();
request.open('GET', '/frank.json');
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
};
request.send();
