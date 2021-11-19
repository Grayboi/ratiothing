var natsc = '#c9e8b0'
var atsc = '#73ff00'
var answer
console.log('yowelcome')
function pick(){
    var num1 = Math.floor(Math.random() * 10)
    var num2 = num1 * Math.floor(Math.random() * 10)
    document.getElementById('question').innerHTML = `Reduce ${num1}:${num2} to its lowest value.`
    answer = num1/num2
}
pick()
document.getElementById('submit').addEventListener('click', ()=>{
    console.log('hello')
    var ans = document.getElementById('answer').value.split(':')
    var ans1 = ans[0]
    var ans2 = ans[1]
    if(ans1/ans2 === answer){
        console.log('correct')
        document.getElementById('question').innerHTML = "Correct!"
    }else{
        console.log('incorr')
        document.getElementById('question').innerHTML = "Incorrect!"
    }
    setTimeout(() => {
        pick()
    }, 2000)
})