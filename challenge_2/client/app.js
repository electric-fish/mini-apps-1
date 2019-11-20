const server = 'http://localhost:3000';

window.onload = () => {
  fetch (server + '/get_csv', {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  })
  .then ( (response) => {
    return response.text();
  })
  .then ( (result) => {
    document.getElementById("csvData").value = result;
  });
};



let submitText = () => {
  let jsonStr = document.getElementById("jsonData").value;
  
  fetch (server + '/upload_json', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: jsonStr,
  })
  .then ( (response) => {
    return response.text();
  })
  .then ( (result) => {
    // document.getElementById("csvData").value = result;
    latestCSV = result;
    console.log("Complete JSON text to CSV text conversion.");
  });
}



let submitFile = () => {
  const jsonFile = document.getElementById('fileupload').files[0];
  
  if (!jsonFile) {
    console.error('File not selected.');
    return;
  }

  fetch (server + '/upload_file', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: jsonFile,
  })
  .then ( (response) => {
    return response.text();
  })
  .then ( (result) => {
    document.getElementById("csvData").value = result;
    latestCSV = result;
    console.log("Complete JSON file to CSV text conversion.");
  });
}