document.querySelector("#input"),document.querySelector("#city"),document.querySelector("#cityName");const e=document.querySelector("#temp"),t=document.querySelector("#main");document.querySelector("#discription"),document.querySelector("#image");weatherUpdate=()=>{const n=new XMLHttpRequest;n.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Porcuna&appid=ded8fb24404261afff13e88870c2cf84&lang=sp"),n.send(),n.onload=()=>{if(404===n.status)e.innerHTML="Api no disponible.";else{var r=JSON.parse(n.response);console.log(r),"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."===r.message?(e.innerHTML="Se hs superado las llamadas a la api ",t.innerHTML="En un tiempo volvera a estar disponible"):(e.innerHTML=`${Math.round(r.main.temp-273.15)}°C`,t.innerHTML=r.weather[0].description)}}},weatherUpdate();
//# sourceMappingURL=index.e634d4ea.js.map
