
var db = firebase.database().ref('/quiz/')

const dataread = () =>{


    let form = document.getElementById('form')
    console.log('sgsdgdsfgdffg')
    var question 
    var option
var i = 0
    db.on('value', function (quiz) {
            for (var key in quiz.val()) {
                var user = quiz.val()[key];
                question = user.q
                for(var opt in user.option){

                    option = option[opt]
                }
                
                // i++

console.log(question)
console.log(option)
// form.innerText = user


                

    }})

}


