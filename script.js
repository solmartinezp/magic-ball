let button= document.getElementById('button');
        let circle= document.getElementById('circle');
        let number= document.getElementById('number');
        button.addEventListener('click', changeCircle);
        var answers= ['No', 'Yes', 'God, no', 'God, yes', "Please don't", "Sure", 'Maybe later', 'Stop, go to bed', 'Do it!'];
        var index= Math.floor(Math.random()*((answers.length-1)-0+1))+0;
        
        function changeCircle() {
            if (!(circle.classList.contains('css-selector'))) { 
                // circle.animate([
                // {opacity: 1}, 
                // {opacity: 0.5},
                // {opacity: 0.9}
                // ], { 
                // duration: 2000,
                // iterations: 1,
                // fill: 'forwards'
                // });
                number.classList.toggle('result');
                number.innerHTML= answers[index];
                button.innerHTML= 'Try again';
                
                circle.classList.toggle('css-selector');
            } else {
                location= location;
                // circle.classList.toggle('css-selector'); 
                // button.innerHTML= 'Click Me';
                // number.classList.toggle('result');
                // number.innerHTML= '8';
             }
            }