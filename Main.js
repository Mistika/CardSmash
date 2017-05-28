rectMode(CENTER);
textMode(CENTER);
//The variables of the game
var Cards = Array(52);
var copy_Cards = Array(52);
var playing_Cards = Array(52);

var AIlevel;

//the location of where you are in the game, 0 is beginning screen, 1 is main menu, 2 is difficulty selection, 3 is game setup, 4 is game play, 5 is game end, 6 is score revelation, and 7 is reset to main menu, and 8 reset game entirely.
var placeholder = 0;

Cards = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10];

var t;
for(var i = 0; i<=20;)
{
    t=i+36;
    if(i<3){Cards[t]="j";}
    else if(i<7){Cards[t]="q";}
    else if(i<11){Cards[t]="k";}
    else if(i<15){Cards[t]="a";}
    else if(i<17){Cards[t]="jo";}

i+=1;
}

copy_Cards = Cards;

var shuffle;

var Shuffle = function()
{
copy_Cards.sort(function(a, b){return random(-1,55);});

};



var allowed = true;
var buttonoff = true;
var buttonpressed = false;




var button = function(x,y,size1,size2, textbox, accx, accy)
{

mouseClicked = function(){buttonoff = true;};

fill(124, 207, 0);
buttonpressed = false;
//detects for whether the mouse is in the button range, and if so, then it changes the color of the button
if(mouseX < x + size1 / 1 && mouseX > x - size1 / 2 && mouseY < y + size2 / 2 && mouseY > y - size2 / 2){buttonpressed = false; allowed = false;
    fill(201, 255, 120);}
   //actually changes the value of buttonpressed because the button was clicked on 
if(buttonoff && mouseX < x + size1 / 2 && mouseX > x - size1 / 2 && mouseY < y + size2 / 2 && mouseY > y - size2 / 2){ buttonpressed = true;}

else{buttonpressed = false;}


rect(x,y,size1,size2,20);

fill(255, 0, 0);
text(textbox,x + accx,y + accy);
};

var buttonend = function()
{
allowed = false;
buttonpressed = false;
mouseClicked = function(){buttonoff = true;};

};


textFont(createFont("cursive"));
fill(255, 0, 0);
textSize(30);
Shuffle();
var j = 0;


var isoptions = false;
var pressure;

var draw = function() {
  //mouseClicked = function(){buttonoff = true;};
  background(148, 95, 148);
  //start menu
  if(placeholder === 0)
  {
      button(200,200,78,34,"play", -26,8);
      if(buttonpressed){placeholder = 1;}
      buttonend();
  }
  //Main menu
  else if(placeholder === 1){
      text("Main Menu", 120,89);
      
      button(200,162, 185, 44, "Start Match", -88,9);
      if(buttonpressed){placeholder = 2;}
      buttonend();
      button(200, 220, 185, 44, "Options",-54,9);
      if(buttonpressed){isoptions = true;}
      buttonend();
      //menu and gameplay options
      if(isoptions){}
  }
//AI level select
    else if(placeholder === 2)
    {
        text("Difficulty Select", 85, 70);
        
        //no AI
        button(200,320,113,50, "No CPU", -52,7);
        if(buttonpressed){ AIlevel = 0; placeholder = 3;}
        buttonend();
        //easy
        button(200,140,80,50, "Easy", -30,7);
        if(buttonpressed){ AIlevel = 1;placeholder = 3;}
        buttonend();
        //medium
        button(200,200,130,50, "Medium", -56,7);
        if(buttonpressed){AIlevel = 2;placeholder = 3;}
        buttonend();
        //Hard
        button(200,260,80,50, "Hard", -34,9);
        if(buttonpressed){AIlevel = 3;placeholder = 3;}
        buttonend();
    }
if(mouseIsPressed && buttonpressed){}
if(isoptions){rect(200,200,20,20);}
buttonoff = false;
};
