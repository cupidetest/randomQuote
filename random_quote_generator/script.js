console.log("hello");
// API endpoint URL
var f='';
    const apiUrl = 'https://api.quotable.io/random';

    // Fetch data from the API
    function fetchData(){
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
              f = "\"" + data.content + "\"";
              f = f + "<br/> -- " + data.author;
                // Handle the data
                const outputElement = document.getElementById('output').innerHTML=f;
                
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
          }

            const fetchButton = document.getElementById('fetchButton');
            fetchButton.addEventListener('click', fetchData);
