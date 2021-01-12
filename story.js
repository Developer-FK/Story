$(document).ready(function(){

    $('#story-form').submit(function(event){
        event.preventDefault()

       let textInput =  $('input[type="text"]');
       let numInput =  $('input[type="number"]');

       let radioInput =  $('input[type="radio"]:checked');
       let select = $('#sel');
       let textArea = $("#message");
      

       //console.log(arr)

       console.log($(select).val())
       console.log($(numInput).val())

       console.log($(textArea).val())
       //console.log("radio buttons")


        console.log($(radioInput).val());
        let arrayStorage = Array();
        
       $.each(textInput, function(i, inp){

        console.log($(inp).val());
        arrayStorage.push($(inp).val())
        
       });


        arrayStorage.push($(numInput).val())
        arrayStorage.push($(radioInput).val())
        arrayStorage.push($(select).val())
        arrayStorage.push($(textArea).val())

       localStorage.setItem("InputText",arrayStorage);

       location.href = "story.html";



    })
});