
export default async function getdata(city_name){

    const url_1 = ("https://api.openweathermap.org/data/2.5/weather?q=");
    const url_2 =  ("&appid=182f52e600c44df829ae04a6bd592dbc&units=metric");

    const url = url_1.concat(city_name,url_2);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Weather         : " + feel(data.main.temp_max) );
    console.log("City            : " + data.name)
    console.log("Temperature     : " + data.main.temp + " C");
    console.log("Max Temperature : " + data.main.temp_max + " C");
    console.log("Min Temperature : " + data.main.temp_min + " C");
    console.log("Cloud coverage  : " + data.clouds.all + " %")
    console.log("Pressure        : " + data.main.pressure + " mbar");
    console.log("Feels like      : " + data.main.feels_like + " C"); 
}

function feel(t){

    let feel =  new String();

    if (t > 25){
        feel =  "Hot" ;
        }
    else if (t < 25) {
        feel =  "Chilly" ;
    }
    else if (t < 10 ) {
        feel =  "Cold"
    }

    return (feel);
   }


getdata("Kolkata");