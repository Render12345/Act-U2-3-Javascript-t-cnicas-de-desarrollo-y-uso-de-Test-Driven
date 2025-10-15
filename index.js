document.addEventListener('DOMContentLoaded',function(){
    const btn=document.getElementById('add');
    const title = document.getElementById('title');     
    const description = document.getElementById('description'); 
    const table = document.getElementById('table'); 
    const alert = document.getElementById('alert');    

    btn.onclick=addTodo;
    
    //verificar con consola
    //btn.onclick=function(){
    //    console.log('Title: '+title.value);     
    //    console.log('Description: '+description.value); 
    //}

    //function addTodo for verification of input fields
    function addTodo(){
        if (title.value === '' || description.value === ''){ 
            
            //console.log('Please fill in all fields'); 
            alert.classList.remove('d-none');
            alert.innerText='Please fill in all fields';      
            return;
        } 

        alert.classList.add('d-none');
        const row = table.insertRow();
        //creating each td one by one is tedious
        //const td1 = document.createElement('td');
        //we can use innerHTML to add content
        row.innerHTML=`
            <td>${title.value}</td> 
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        //create delete button separated from the row innerHTML
        //to add event listener to it
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        deleteBtn.innerHTML='<i class="fa fa-trash"></i>';
        //throws the items of the row
        //console.log(row.children)
        //add delete button to especific section of the row
        row.children[3].appendChild(deleteBtn);

    }


});



