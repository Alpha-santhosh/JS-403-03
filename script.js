const service = [{
    txt:"30%-Outstanding",
    value:30,
},
{
    txt:"20%-Good",
    value:20,
},
{
    txt:"15%-It was okay",
    value:15,
},
{
    txt:"10%-Bad",
    value:10,
},
{
    txt:"5%-Terrible",
    value:5,
},]
const sel = document.getElementById("sel")
var option = document.createElement("option")
service.map((e=>{
    console.log(e.txt)
    console.log(e.value)
    var option = document.createElement("option")
    option.textContent = e.txt
    option.value = e.value
    sel.appendChild(option)
}))
function cal(){
    var amountt = document.getElementById("amount").value
    var ppl = document.getElementById("ppl").value
    console.log("bill amount:",amountt)
    console.log("ppl:",ppl)
    var serviceq = (sel.value/100)
    var ans = (amountt*serviceq)/ppl
    console.log(ans)
    var bi = document.getElementById("bill").innerText= ans
}
