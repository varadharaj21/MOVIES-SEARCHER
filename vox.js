//Movie API  https://www.omdbapi.com/?apikey=45f0782a&s=
/* <div id="moviecard">
         <img id="movieposter"
         src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"/>
         <p ><b>Title :   </b>  The Avengers</p>
         <p> <b>Release Year : </b> 2012</p>
    </div>*/

var movienameelement = document.getElementById("moviename")
var searchbtn = document.getElementById("btn")
var moviewrapper = document.getElementById("moviewrapper")
var moviestatus = document.getElementById("moviestatus")
console.log(movienameelement.value)

searchbtn.addEventListener("click", function(){
    moviewrapper.innerHTML = ""
    moviestatus.innerText  =  "Loading......"
    $.get(` https://www.omdbapi.com/?apikey=45f0782a&s=${movienameelement.value}`, function(response){
       console.log(response)
       var check = response.Response
       console.log(check)

       var movies = response.Search;
        console.log(movies);
        if(check == "True"){
        for (var i = 0;i<movies.length;i++){
          
            moviewrapper.innerHTML += `
            <div id="moviecard">
         <img id="movieposter"
         src='${movies[i].Poster}'/>
         <p ><b>Title :   </b> '${movies[i].Title}'</p>
         <p> <b>Release Year : </b> '${movies[i].Year}'</p>
    </div>`
        } 
        moviestatus.innerText  =  ""
    }else{
        moviestatus.innerText  =  "404 Movies not found"
    }
        movienameelement.value = ""
       
           
    })
})
