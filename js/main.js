$(document).ready( function() {
  
    // var firstDiv = document.getElementById("firstDiv");
    // var secondDiv = document.getElementById("secondDiv");
/*
    var newRGB1 = 'rgb(' + arr1[0] + ',' + arr1[1] + ',' + arr1[2] + ')'; 
    var newRGB2 = 'rgb(' + arr2[0] + ',' + arr2[1] + ',' + arr2[2] + ')';

    firstDiv.style.backgroundColor = newRGB1;
    secondDiv.style.backgroundColor = newRGB2;
*/     
    /*
    var btn = document.getElementById("colorGen");
    btn.addEventListener('click',changecolor,false);
    
    function changecolor()
    {
    */
    
    arrangeboard();
    
    var scoreboard = document.getElementById("demo");
    var score = 0;
    scoreboard.textContent = score;
    
    function arrangeboard()
    {
    
        $('.tile').removeClass('item');

        var tiles = document.getElementsByClassName("tile");
        console.log(tiles.length);

         var newRGB = [];
         newRGB = randomcolor();  

        var newRGB1 = 'rgb(' + newRGB[0][0] + ',' + newRGB[0][1] + ',' + newRGB[0][2] + ')'; 
        var newRGB2 = 'rgb(' + newRGB[1][0] + ',' + newRGB[1][1] + ',' + newRGB[1][2] + ')';

        var num = Math.floor(Math.random() * (64 - 0)) + 0;

        tiles[num].style.background = newRGB2;
        tiles[num].classList.add("item");

         for(var i=0; i<tiles.length;i++)
            {
                if(tiles[i].classList.contains("item"))
                {
                    console.log('found at: ' + i);
                }
                else
                {    
                tiles[i].style.backgroundColor = newRGB1;
                }
            }
    }
    
    
     $('#wrapper').on('click', function (e) 
      {
         if($(e.target).hasClass("item"))
             {
                score += 1;
                arrangeboard();
                scoreboard.textContent = score; 
             }
         else{
                alert("gameover");
                arrangeboard();
                score = 0;
                scoreboard.textContent = score;
             }
         
      });
         
    
   // firstDiv.style.backgroundColor = newRGB1;
    //secondDiv.style.backgroundColor = newRGB2;
        
    //console.log(newRGB1);
    //console.log(newRGB2);
    //}

    
        function randomcolor() {
             var arr1 = [];
             var arr2 = [];
             
             var oddItem;
             
             if(score <= 10)
                 {
                     oddItem = 50;
                 }
             else{
                 if(score <= 20)
                     {
                         oddItem = 40;
                     }
                 else{
                     if(score <= 30)
                         {
                             oddItem = 20
                         }
                     else{
                         if(score <= 50)
                             {
                                 oddItem = 10;
                             }
                         else{
                             if(score <= 100)
                                 {
                                     oddItem =5;
                                 }
                             else{
                                 oddItem = 50;
                             }
                         }
                     }
                 }
             }
                 
            for (var i=0; i<3; i++)
                {
                    var num = Math.floor(Math.random() * (200 - 5 + 1)) + 5;
                    arr1.push(num);
                    arr2.push(num + oddItem);
                    console.log('OddItem Number :' +oddItem);
                }
            console.log(arr1);
            console.log(arr2);

            return[
                arr1,arr2
            ];

        }

    
 });
    
    
    
    



