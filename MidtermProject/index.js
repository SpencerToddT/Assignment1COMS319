console.log(document.title);


function loadHikes(myHikes)
{
    var imgs = [];
    var txts = [];
    var times = [];
    //get images
    imgs[0] = document.getElementById("imageH1");
    imgs[1] = document.getElementById("imageH2");
    imgs[2] = document.getElementById("imageH3");
    imgs[3] = document.getElementById("imageH4");
    imgs[4] = document.getElementById("imageH5");

    //get text
    txts[0] = document.getElementById("textH1");
    txts[1] = document.getElementById("textH2");
    txts[2] = document.getElementById("textH3");
    txts[3] = document.getElementById("textH4");
    txts[4] = document.getElementById("textH5");

    //get time
    times[0] = document.getElementById("timeH1");
    times[1] = document.getElementById("timeH2");
    times[2] = document.getElementById("timeH3");
    times[3] = document.getElementById("timeH4");
    times[4] = document.getElementById("timeH5");


    var txt = [];
    var time = [];
    if(document.title == "Midterm Project Team 32 - North American Hikes")
    {
        console.log(myHikes.HikesNA[0].title);
        for(let i = 0; i < myHikes.HikesNA.length; i++)
        {
            txt[i] = document.createElement("p");
            txt[i].innerHTML = `<b>${myHikes.HikesNA[i].title}</b><br><br>${myHikes.HikesNA[i].description}<br><br>`;
            txt[i].className = "card-text";

            time[i] = document.createElement("small");
            time[i].innerHTML = myHikes.HikesNA[i].time;
            time[i].className = "text-muted";

            imgs[i].src = myHikes.HikesNA[i].image
            txts[i].appendChild(txt[i]);
            times[i].appendChild(time[i]);
        }
    }
    else if(document.title == "Midterm Project Team 32 - Europe Hikes")
    {
        for(let i = 0; i < myHikes.HikesNA.length; i++)
        {
            txt[i] = document.createElement("p");
            txt[i].innerHTML = `<b>${myHikes.HikesEU[i].title}</b><br><br>${myHikes.HikesEU[i].description}<br><br>`;
            txt[i].className = "card-text";

            time[i] = document.createElement("small");
            time[i].innerHTML = myHikes.HikesEU[i].time;
            time[i].className = "text-muted";

            imgs[i].src = myHikes.HikesEU[i].image
            txts[i].appendChild(txt[i]);
            times[i].appendChild(time[i]);
        }
    }
    
}

fetch('./data.json')
.then(response => response.json())
.then(myHikes => loadHikes(myHikes));