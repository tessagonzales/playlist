 $(document).ready(() => {

   let trackButton = $('#trackButton');
   let albumList = $('#albumList')
   //console.log('backgroundImg: ', backgroundImg);
   //console.log('album html', albumList)
   //console.log('track button: ', trackButton)


   fetch(`https://lit-fortress-6467.herokuapp.com/object`)
     .then(response => response.json())
     .then(albums => {
       //console.log('albums: ', albums['results'])

// Three album display
       for (let keys in albums) {
         //console.log(albums[keys][0]['cover_art'])
         albumList.append(`
           <img src='images/${albums[keys][2]['cover_art']}' width='237' height='237'><BR><BR>
           <img src='images/${albums[keys][3]['cover_art']}' width='237' height='237'><BR><BR>
           <img src='images/${albums[keys][1]['cover_art']}' width='237' height='237'><BR>
         `)
         }






     }) //end of 2nd then()

// Event for button click
  trackButton.click(() => {
    location.replace("./playlist.html")
  });


 }) //end of jQuery
