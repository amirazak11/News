var myHTTP =new XMLHttpRequest();
var list =[]
myHTTP.open("GET","https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=723023d76a264261b438e094844caad2");
myHTTP.send();
myHTTP.addEventListener("readystatechange",function(){
    if(myHTTP.readyState ==4 && myHTTP.status ==200){
        list=JSON.parse(myHTTP.response).articles;
        console.log(list);

        display();
    }
})
function display(){
 var cartona = ``;
 for (var i=0;i<list.length;i++){
    cartona += `
    <div class="col-md-4 p-2">
    <div class="card  h-100 p-1 ">
    <h5 class="card-title p-2">${list[i].title}</h5>
  <img src="${list[i].urlToImage ? list[i].urlToImage :'img/download.jfif'}" class="card-img-top w-100" alt="...">
  <div class="card-body">
   
    <p class="card-text"> ${list[i].description}</p>
  </div>
</div>
</div>
`
    
//     `<div class="col-md-4">
//     <div class="iteam">
//         <h5>
// 
//         </h5>
//         <img class="w-100" src="${list[i].urlToImage ? list[i].urlToImage :'img/download.jfif'}">
//         <p>
//         ${list[i].description}  
//         </p>
//     </div>
// </div>`;
 }
 document.getElementById("myData").innerHTML=cartona;
}
