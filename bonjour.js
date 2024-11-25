const container = document.getElementById("container")
const boxs = container.getElementsByClassName("box")
const totalPrice= document.getElementById("total")
// console.log(totalPrice)


let total=0;
for (let i=0 ; i< boxs.length ; i++){
    const box= boxs[i]
const plus= box.getElementsByClassName("plus")[0]
// console.log(plus)
const minus= box.getElementsByClassName("minus")[0]
// console.log(minus)
const quantity = box.getElementsByTagName("input")[0]
const deletebtn = box.getElementsByClassName ("delete-btn")[0]
const price = parseInt (box.getElementsByClassName("price")[0].innerText.substring(1))


plus.addEventListener("click",()=> {
    quantity.value++
    total+=price
    totalPrice.innerText=` Total Price : $${total}`
})
minus.addEventListener("click",()=> {
    if (quantity.value >1){
    quantity.value--
    total-=price
    totalPrice.innerText=` Total Price : $${total}`
    }
})
deletebtn.addEventListener("click" , ()=>
{
    box.remove()
    total-=price*quantity.value
    totalPrice.innerText=` Total Price : $${total}`
})

}

$(".heart.fa").click(function(){
$(this).toggleClass("fa-heart fa-heart-o")
})
























/*var container = document.getElementById("#container")
// console.log(container)
var boxs = container.getElementsByClassName("box")
// console.log(boxs)
var totalcost = document.getElementsByClassName("total-cost")
// console.log(totalcost)




let total=0;
for ( let i=0 ; i<boxs.length ; i++){
    let box= boxs[i]
var btnbtnprimaryplus = box.getElementsByClassName("plus")[0]
// console.log(btnbtnprimaryplus)
var btnbtnprimaryminus = box.getElementsByClassName("minus")[0]
// console.log(btnbtnprimaryminus)
var quantity = box.getElementsByTagName("input")[0]
// console.log(quantity)
var btnbtndangerdeletebtn = box.getElementsByClassName("delete-btn")[0]
// console.log(btnbtndangerdeletebtn)
var price = parseInt (box.getElementsByClassName("price")[0].innerText.substring(1))



plus.addEvenetListener("click", ()=>{
quantity.value++
total+=price;
totalPrice.innerText=`Total Price : $${total}`
})
plus.addEvenetListener("click", ()=>{
    if(quantity.value >1){
    quantity.value--
    total-=price;
    totalPrice.innerText=`Total Price : $${total}`
    }})

}

*/