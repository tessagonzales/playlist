 $(document).ready( () => {

   let trackButton = $('#trackButton');
   let albumList = $('#albumList')
   //console.log('backgroundImg: ', backgroundImg);
   //console.log('album html', albumList)
    //console.log('track button: ', trackButton)

// Event for button click
    trackButton.click( () => {
      location.replace("./playlist.html")
    });

    fetch(`https://lit-fortress-6467.herokuapp.com/object`)
      .then(response => response.json())
      .then(albums => {
          //console.log('albums: ', albums['results'])

          for(let i=0; i< albums['results'].length; i++){
            let allAlbums = albums['results'][i]
            //console.log(albums['results'][i]['cover_art']);
            albumList.append(`<img src='images/${allAlbums['cover_art']}' width='200' height='200'>`)

          }







      })//end of 2nd then()




 }) //end of jQuery
