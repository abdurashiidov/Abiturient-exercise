let question1 = prompt("Qancha ball to'pladingiz")

if (question1 <= 80) {
    alert("O'qishga kira olmadingiz")
} else if(question1 <= 100){
    alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz")
    let question2 = prompt("super-kontrakt miqdori yiliga 3000$ qancha pulingiz bor")
    if (question2 >= 3000) {
        alert("Oqishga qabul qilindingiz")
    } else if(question2 <= 3000){
        alert("Uzur super-kontraktga pulingiz yetmaydi")
    }
} else if (question1 >= 100){
    alert("siz kontrakt asosida qabul qilindizngiz")
    let question3 = prompt("kontrakt miqdori yiliga 2000$ qancha pulingiz bor")
    if (question3 >= 2000) {
        alert("o'qishga qabul qilindingiz")
    } else if(question3 <= 2000){
        alert("Uzur kontraktga pulingiz yetmaydi")
    }
} else if(question1 <= 150){
    alert("siz grant asosida o'qishga qabul qilindingiz")
}
else if (question1 <= 180){
   alert("ERROR")



}
