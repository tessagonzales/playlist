$(document).ready(function() {
  let goHome = $('#goHome')
  let clearButton = $('#clearButton')
  let submitButton = $('#submitButton')
  let box = $('#box')
  let smallAlbums1 = $('#smallAlbums1')
  let smallAlbums2 = $('#smallAlbums2')
  let smallAlbums3 = $('#smallAlbums3')
  let smallAlbums4 = $('#smallAlbums4')
  let smallAlbums5 = $('#smallAlbums5')
  //console.log('box: ', box)





  fetch(`https://lit-fortress-6467.herokuapp.com/object`)
    .then(response => response.json())
    .then(albums => {
      //console.log('albums: ', albums['results'])

      for (let keys in albums) {
        //console.log(albums[keys][0]['cover_art'])
        smallAlbums1.append(`<img src='images/${albums[keys][0]['cover_art']}' width='100' height='100'>`)
        smallAlbums1.click(() => {
          box.append(`
              ${albums[keys][0]['artist']} :
              ${albums[keys][0]['title']}<br>
              `)
        })

        smallAlbums2.append(`<img src='images/${albums[keys][1]['cover_art']}' width='100' height='100'>`)
        smallAlbums2.click(() => {
          box.append(`
              ${albums[keys][1]['artist']} :
              ${albums[keys][1]['title']}<br>
              `)

        })

        smallAlbums3.append(`<img src='images/${albums[keys][2]['cover_art']}' width='100' height='100'>`)
        smallAlbums3.click(() => {
          box.append(`
              ${albums[keys][2]['artist']} :
              ${albums[keys][2]['title']}<br>
              `)
        })

        smallAlbums4.append(`<img src='images/${albums[keys][3]['cover_art']}' width='100' height='100'>`)
        smallAlbums4.click(() => {
          box.append(`
              ${albums[keys][3]['artist']} :
              ${albums[keys][3]['title']}<br>
              `)
        })

        smallAlbums5.append(`<img src='images/${albums[keys][4]['cover_art']}' width='100' height='100'>`)
        smallAlbums5.click(() => {
          box.append(`
              ${albums[keys][4]['artist']} :
              ${albums[keys][4]['title']} <BR>
              `)
        })


        //Submitted
        let userTracks = submitButton.click(() => {
          console.log('submitted: ', box)
          box.empty();

          // $.post('https://lit-fortress-6467.herokuapp.com/post',
          // box,
          // function(data,status){
          //     console.log("Data: " + data + "Status: " + status);
          // })
        });


        clearButton.click(() => {
          box.empty()
        })


      } // end of for in loop





    }) // end of .then()




  //go Home Button
  goHome.click(() => {
    location.replace("./index.html")
  });






}) //end of jQuery
