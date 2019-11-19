$(document).ready(function () {
  let server = 'http://localhost:3000';

  $('form').on('submit', function(e){
    e.preventDefault();
    
    // fetch(server + '/upload_json', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   // mode: 'cors', // no-cors, *cors, same-origin
    //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   // credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // redirect: 'follow', // manual, *follow, error
    //   // referrer: 'no-referrer', // no-referrer, *client
    //   body: $('#jsonData').val(), // body data type must match "Content-Type" header
    // });

    $.ajax({
      url: server + '/upload_json',
      type: 'POST',
      data: $('#jsonData').val(),
      contentType: 'application/json',
      success: (data) => {
        $('#csvData').val(data);
      },
      error: (error) => {
        console.error(error);
      }
    });



  });
});