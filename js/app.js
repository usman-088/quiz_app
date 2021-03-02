
var db = firebase.database().ref('/quiz/')
var questionsList = []
var i = 0
var addQuestion = () => {
    i++
    var qList = document.getElementById('questions')
    var question = document.createElement('div')
    var br = document.createElement('br')
    var qdiv = document.createElement('div')
    input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Write Question Here...')
    qdiv.innerHTML = `Q${i}`
    qdiv.appendChild(input)
    var odiv = document.createElement('div')
    odiv.setAttribute('id', 'optionList' + i)

    odiv.innerHTML += '<input type="radio"><input id="createInput" type="text" placeholder="Add Option"  onfocus="option(' + i + ')"></br>'

    question.appendChild(qdiv)
    question.appendChild(odiv)
    qList.appendChild(question)
    question.setAttribute('class', 'card')
    // question.setAttribute('id','ques'+i)
    input.setAttribute('id', 'qInput' + i)
    // console.log(quiz)
    // console.log(quiz)


    
    var ques = document.getElementById("qInput" + i)
    console.log(ques.value)
    var opt = []
    for (var j = 1; j < question.length; j++) {
        opt.push(document.getElementById(i + "opt" + j).value)
        
        
    }
    var arrquestion = 
        {
            q: ques.value,
            option: opt,
            ans:0
        }
        
    
        questionsList.push(arrquestion)
        console.log(questionsList)
        console.log(arrquestion.q)
        
        
        input.onchange=function(){
            questionsList[j-1].q=this.value
        }






  

}
const option = (i) => {
    let j=i
    let createdDiv = document.getElementById('optionList' + i);
    var ques = document.getElementById('qInput' + i)
    let count = (createdDiv.childNodes.length) / 3
    let radBtn = document.createElement('input')
    let br = document.createElement('br')
    let input = document.createElement('input')
    radBtn.setAttribute('type', 'radio')
    radBtn.setAttribute('name', 'radio' + i)
    input.setAttribute('type', 'text')
    input.setAttribute('id', i + 'opt' + count)
    radBtn.setAttribute('id', 'rad' + count)
    input.setAttribute('value', 'Option ' + count)
    createdDiv.appendChild(radBtn)
    createdDiv.appendChild(input)
    createdDiv.appendChild(br)

    input.onchange=function(){
        questionsList[j-1].option[count-1]=this.value
    }
    radBtn.onclick =()=>{
        questionsList[j-1].ans=count
    }
    questionsList[i-1].option.push(input.value)
    // console.log(option)
    input.select()




}




const databasee = () => {



    db.set(questionsList)



}



       



// const addquestion = () => {

//     var ques = document.getElementById("qInput" + i)
//     var opt = []
//     for (var j = 1; j < count; j++) {
//         opt.push(document.getElementById(i + "opt" + j).value)


//     }
//     var arrquestion = [
//         {
//             q: ques.value,
//             option: opt
//         },

//     ]


//     db.set(arrquestion)

// } 