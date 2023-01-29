const close = document.querySelectorAll('.close')

close.forEach(function(el) {
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
        e.preventDefault() // mencegah aksi defaultnya tidak aktif
        e.stopPropagation() // menghentikan efek bubbling pada multi command (jalankan 1 saja command meski ada 2 command)
    })
})

// const cards = document.querySelectorAll('.card')

// cards.forEach(function(card) {
//     card.addEventListener('click',function(e){
//         alert('system ready')
//     })
// })

// const container = document.querySelector(".container");

// container.addEventListener("click", function(e) {
//   if (e.target.className === "close") {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault()
//   }
// });
