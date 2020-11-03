$(document).ready(function(){
    var apikey = 'bfb28d1c'
    $('#movieForm').submit(function(event){
        event.preventDefault()
        var movie = $('#movie').val()
        var result = ''
        var url = "https://www.omdbapi.com/?apikey="+apikey
        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){
//                 console.log(data)
                result = `
                <div class="container">
                  <div class="cellphone-container">    
                  <div class="movie">       
                  <div><img class="movie-img" src="${data.Poster}"></div>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>${data.Title}</h1>
                        <ul class="movie-gen">
                          <li>${data.Rated}  /</li>
                          <li>${data.Runtime}  /</li>
                          <li>${data.Genre}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>SUMMARY</h5>
                      </div>
                      <div class="col2">
                         <ul class="movie-likes">
                          <li>${data.Year}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">${data.Plot}</p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">${data.Actors}</p>
                      </div>
                      <div class="mr-grid action-row">
                            <div class="col2 mt-3"><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${data.Ratings[1].Value}" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                          </div></div>
                            <div class="col6 action-btn"></div>
                            <div class="col6 action-btn"><i class="rating">${data.imdbRating}</i></div>
                            <div class="col6 action-btn"><i class="fab fa-imdb"></i></div>
                            </div>
                        </div>
                        </div>
                  </div>
                </div>
                `
                $('#result').html(result)
            }
        })
    })
})
