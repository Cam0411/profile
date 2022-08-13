const music = document.querySelector('.music__feature')
const modal = document.querySelector('.modal')
const content__modal = document.querySelector('.content__modal')
const music__audio = document.querySelector('.music__play')
const dics = document.querySelector('.dics ')
function app(){
  music.addEventListener('click',() => {
      modal.classList.add('add__music')
  })
  music.addEventListener('click',(e) => {
     e.stopPropagation()
  })
  content__modal.addEventListener("click", function(event){
     event.stopPropagation()
  });
  modal.addEventListener('click',() => {
    modal.classList.remove('add__music')
  })
  document.querySelector('body').addEventListener('click',() => {
    modal.classList.remove('add__music')
  })
}
console.log(music__audio);
app()