document.getElementById("searchInput").addEventListener("input", function() {
    var filter = this.value.toUpperCase();
    var names = document.getElementById("namesList").getElementsByTagName("li");
  
    // Parcourir la liste des noms et cacher ceux qui ne correspondent pas à la recherche
    for (var i = 0; i < names.length; i++) {
      var name = names[i].textContent || names[i].innerText;
      if (name.toUpperCase().indexOf(filter) > -1) {
        names[i].style.display = "";
      } else {
        names[i].style.display = "none";
      }
    }
  });
  