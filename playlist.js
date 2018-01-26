$( document ).ready(function() {
    let goHome = $('#goHome')
    let clearButton = $('#clearButton')
    let submitButton = $('#submitButton')
    let box = $('#box')
    let smallAlbums = $('#smallAlbums')
    //console.log('box: ', box)


    fetch(`https://lit-fortress-6467.herokuapp.com/object`)
      .then(response => response.json())
      .then(albums => {
          //console.log('albums: ', albums['results'])


//album thumbnail display
          for(let i=0; i< albums['results'].length; i++){
            let allAlbums = albums['results'][i]
            console.log(albums['results'][i]['cover_art']);
            smallAlbums.append(`<img src='images/${allAlbums['cover_art']}' width='100' height='100'>`)


            smallAlbums.click(() =>{
              box.append(`
                ${allAlbums['artist']}<BR>
                ${allAlbums['title']}<br>
                `) })

                clearButton.click(() => {
                    box = ''
                })

} // end of for loop







      }) // end of .then()














//go Home Button
      goHome.click( () => {
        location.replace("./index.html")
      })
}) //end of jQuery
