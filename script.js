$(document).ready(function(){
  $("#submitButton").click(function(){
    var input = document.getElementById("searchBox").value
    $.get("http://www.omdbapi.com/?s=" + input, function(data, status){
      for (var i = 0; i < data.Search.length; i++) {
        var title = document.createElement("p")
        var inner = document.createTextNode(data.Search[i].Title)
        title.appendChild(inner)
        document.getElementById("center_column").appendChild(title)


        if (data.Search[i].Poster === "N/A") {
          var poster = document.createElement("img")
          poster.setAttribute("src", "mockups/images/no_image.png")
          document.getElementById("center_column").appendChild(poster)
        } else {
          var poster = document.createElement("img")
          poster.setAttribute("src", data.Search[i].Poster)
          document.getElementById("center_column").appendChild(poster)
        }
      }
    })
  })
})
