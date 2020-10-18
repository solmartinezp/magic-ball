let button= document.getElementById('button');
        let circle= document.getElementById('circle');
        let number= document.getElementById('number');
        button.addEventListener('click', changeCircle);
        document.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                changeCircle();
            }
        });
        
        var answers= ['No', 'Yes', 'God, no', 'God, yes', "Please don't", "Sure", 'Maybe later', 'Stop, go to bed', 'Do it!', '...girl'];
        
        function changeCircle() {
            if (!(circle.classList.contains('css-selector'))) { 
                getAnswer(number, answers);
                number.classList.toggle('result');
                button.innerHTML= 'Try again';
                circle.classList.toggle('css-selector');
            } else {
                getAnswer(number, answers);
             }
            }

        function getAnswer(num, arr) {
            let index= Math.floor(Math.random()*((arr.length-1)-0+1))+0;
            num.innerHTML = arr[index];
        }

