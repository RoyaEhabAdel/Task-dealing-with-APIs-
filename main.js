let httpClient=new XMLHttpRequest();
httpClient.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        let data =JSON.parse(this.responseText);
        console.log(data);
        let i=0;
        let Image=document.getElementById("myImg");
        let Title=document.getElementById("imgTitle");
         
        document.getElementById("play").addEventListener("click",function(){
            const myInterval = setInterval(function(){
            Image.src=data[i].url;
            Title.textContent=data[i].title;
            i++;
            if(i==data.length){
                i=0;
            }
        },2000)
        

        document.getElementById("stop").addEventListener("click", function(){clearInterval(myInterval)});
        document.getElementById("next").addEventListener("click", function(){ Image.src=data[i++].url});
        document.getElementById("pervious").addEventListener("click", function(){ Image.src=data[i--].url});
        
        
    }
        )
    
    }
    
}
httpClient.open("get","https://jsonplaceholder.typicode.com/albums/1/photos");
httpClient.send();
