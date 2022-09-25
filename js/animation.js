// on load
const loadAnimation = () => {
   let nameLength = document.getElementById('about-title');
   nameLength.array.forEach(element => {
       element.style.color = 'red';
   });
};  

const load = () => {
    setTimeout(
        function (){
            document.getElementById('rain_id').style.visibility = 'hidden';
        }, 3000);
};