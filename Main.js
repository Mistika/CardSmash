var Cards = Array(52);
var copy_Cards = Array(52);
var playing_Cards = Array(52);

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

var Sort = function()
{
copy_Cards.sort(function(a, b){return random(-1,55);});

};

fill(255, 0, 0);
textSize(30);
Sort();
var j =-1698;
var draw = function() {
  background(148, 95, 148);
};
