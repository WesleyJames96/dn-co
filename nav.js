var ldnSpace = document.getElementById("londonSpace");
var cornhallSpace = document.getElementById("cornhallSpace");
var cannonSpace = document.getElementById("cannonSpace");
var plazaSpace = document.getElementById("plazaSpace");
var goldSpace = document.getElementById("goldSpace");

//Navbar open and close

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// Navbar open and close with details 
  function openLondon () {
    document.getElementById("mySidenav").style.width = "250px";
    ldnSpace.classList.add("show")
  }

  function openCornhall () {
    document.getElementById("mySidenav").style.width = "250px";
    cornhallSpace.classList.add("show")
  }

  function openCannon () {
    document.getElementById("mySidenav").style.width = "250px";
    cannonSpace.classList.add("show")
  }

  function openPlaza () {
    document.getElementById("mySidenav").style.width = "250px";
    plazaSpace.classList.add("show")
  }

  function openGold () {
    document.getElementById("mySidenav").style.width = "250px";
    goldSpace.classList.add("show")
  }


  