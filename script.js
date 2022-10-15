
let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')


apik = "1ca111125f83ea14d7f4cc65810461b9"



function convertion(val){
    return (val - 273).toFixed(2)
}

   
    btn.addEventListener('click', function(){
       
        


        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())

         

        .then(data => {



            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })


        .catch(err => alert('You entered Wrong city name'))
    })
    


    /* Problems requested to solve below
    const numb = [ "98", "45", "78", "9", "0" ];
      document.getElementById("demo").innerHTML = numb.reverse();

      console.log(numb);

      const arr = [98, 45, 78, 9, 0];

      arr.forEach((num, index) => {
        arr[index] = num + 10;
        return arr;
      });
      
      console.log(arr); */