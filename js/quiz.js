// before user start the quiz we make sure they are ready 
function quizLoad() {
    let name = "آزمون حسابان2"
    let time = "20 دقیقه"
    alert(name +"\n"+time+"\n"+"آماده اید؟")
}

// when user select 'ok' we return to 'quiz list' page 
function submit(){
    if(confirm("آیا از اتمام آزمون اطمینان دارید؟"))
   { let currentAdd = window.location.toString()
    window.location.href = currentAdd.replace("quiz.html", "quizList.html");
   }
}

// to change the type of the answers
function changeType(){

    let mySelect = document.getElementById("selectChangeType")
    let value = mySelect.value

    let lis = document.getElementsByClassName("liAnswerBox")
   

    if(value == 'radio')
    {
        for(i = 1 ; i <= lis.length ; i++){
            lis[i-1].innerHTML = ''
            for (let j = 1; j < 5; j++) {
                lis[i-1].innerHTML += 
                "<input type='radio' name='" + i + "' id='" + i + "' value='" + j + "' class='inputAnswer'>"
                // "<label for='" + i + j + "'>"+j+"</label>"+
            }
            
         }
    }
    if(value == "number"){
        for(i = 0 ; i< lis.length ; i++){
                lis[i].innerHTML = "<input type='number' max ='4' min ='1' class='inputAnswer'>"
         }
    }
    if(value == "range"){
        for(i = 0 ; i< lis.length ; i++){
           lis[i].innerHTML ="1"+"<input type='range' max='4' min='1' class='inputAnswer'>"+"4"
        }
    }
}
