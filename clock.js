


document.addEventListener("DOMContentLoaded", function() {


    var audio = new Audio('./sounds/click.mp3');
    
    audio.addEventListener('canplaythrough', function() {
        console.log('Audio is ready to play');
    });

    audio.addEventListener('error', function(e) {
        console.error('Audio error:', e);
    });

    
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const digitalTime = document.getElementById('digital-time');

    function updateClock() {

           // Play audio on each update

        var soundBtn = document.querySelector("#btn-sound"); 
        soundBtn.addEventListener("click", function() {audio.play();})

           
           audio.play().catch(e => console.log('Play error:', e));

       


        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        var hours = now.getHours();

        if (hours>12)
        {
            hours = hours - 12;
        }

    

        // Analog clock
        // const secondsDegree = ((seconds / 60) * 360) + 90;
        const secondsDegree = (seconds) * (6) ; 
        const minutesDegree = (minutes) * (6);

        // const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        //const hoursDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;

        const hoursDegree = (hours) * (30) ; 

        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;

        // Digital clock
     
        var formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        digitalTime.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the time immediately
});


