  var randomNumber1=Math.floor(Math.random()*6)+1;
  var randomImage="dice"+ randomNumber1 + ".png";
  var finalRandomImage="images/"+ randomImage;

 
 var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",finalRandomImage);


  var randomNumber2= Math.floor(Math.random()*6)+1;
 var  randomImage2="dice"+ randomNumber2 + ".png";
 var finalRandomImage2="images/"+ randomImage2;

 var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",finalRandomImage2);


  if( randomNumber1==randomNumber2){
    var text = document.querySelector("h1");
    text.textContent="Draw";
    
  }
  else if (randomNumber1>randomNumber2){
    var text = document.querySelector("h1");
    text.textContent="Player 1 win";
  }
 else{
    var text = document.querySelector("h1");
    text.textContent="Player 2 win";
 }
 

  


