// Tilesets structure
/*
  name: string          <- name of the tileset
  nbTiles: int          <- number of tiles for the tileset
  link: string          <- link to the tiles image
  extension: string     <- extension of the tiles image
  minLink: string       <- link to the tiles image, low res
  minExtension: string  <- extension of the tiles image, low res
*/
var tilesets = [];
tilesets.push({
  name: "forest",
  nbTiles: 20,
  link: "../img/tilesets/forest/",
  extension: "png",
  minLink: "../img/tilesets/forest/min/",
  minExtension: "jpg"
})