fetch('https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json')
.then(function(response){
    return response.json();
})
.then(function(jsonObj){
    cats = jsonObj.cats;
    
    let body = document.querySelector('body');
    let container = document.createElement('div');
    
    for(let i = 0; i < cats.length; i++){
        
        
        let div = document.createElement('div');
        let img = document.createElement('img');
        let btn = document.createElement('button');
        
        img.setAttribute('src', cats[i].photo);
        btn.innerHTML = 'Show';
        div.setAttribute('id', 'box');
        div.setAttribute('style', 'border: solid thin; margin: 5px; padding: 10px;');
        
        function show(e) {
                    
            div.innerHTML = 
            '<p>'+cats[i].name+'</p>' +
            '<p>'+cats[i].species+'</p>' +
            '<p>'+cats[i].favFoods+'</p>' +
            '<p>'+cats[i].age+'</p>';
            div.appendChild(img);
        }
        
        div.appendChild(btn);
        body.appendChild(div);
        
        btn.onclick = show;
    }
})
.catch(function(err){
    console.log('Fetch problem: ' + err.message);
});