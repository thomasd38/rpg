window.onload = function() {
  tilesets.forEach((element) => {
    for (let index = 0; index < element.nbTiles; index++) {
      console.log('coucou');
      document.body.innerHTML += "<img src='"+element.minLink+(index+1)+"."+element.minExtension+"'><br>"; 
    }
  });
}
