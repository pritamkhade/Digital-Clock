    const minute = document.querySelector(".minute");
    const hour = document.querySelector(".hour");
    const second = document.querySelector(".second");
    const am_pm = document.querySelector(".am_pm");

    /*  const date = new Date();
        console.log(date);
        let hour1 = date.getHours();
        console.log(hour1); */
        
    /* minute.innerText = date.getMinutes();
    hour.innerText = date.getHours();
    second.innerText = date.getSeconds(); */

    function init() {
        const date = new Date();
        let minute1 = date.getMinutes();
        let hour1 = date.getHours();
        let second1 = date.getSeconds();
        
        if(hour1 > 12){
            hour1 = hour1 - 12  // 13-12 = 1 
            am_pm.innerText= "AM";
        }else{
            am_pm.innerText= "PM";
        }

        if(hour1 < 10){
            hour1 = "0"+hour1;
        }
        if(second1 < 10){
            second1 = "0"+second1;
        }
        if(minute1 < 10){
            minute1 = "0"+minute1;
        }

        minute.innerText = minute1;
        hour.innerText = hour1;
        second.innerText = second1;

        

        requestAnimationFrame(init);
    }
    init();
