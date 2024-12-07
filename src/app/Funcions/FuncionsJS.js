export function yellowsubmarine () {
  document.getElementById("textgroc").style.color = 'yellow'

}

export function modificar () {
  document.getElementById("modificarmida").style.width = "200px"
}

export function  countWords () {
  let exc4 = document.getElementById("contarPalabras").innerHTML
  let comptador = 1

  for (let i = 0; i < exc4.length; i++){
    if (exc4[i] === " "){
      comptador++
    }
  }
  return console.log(comptador )

}

export function  Imatge () {
  let imagen = document.getElementById("imatge")
  imagen.src = "https://www.w3schools.com/css/img_fjords.jpg";
  imagen.alt = "fjords";
  imagen.width = "200";
  imagen.height = "200";
}

export function mostrarLlista(idDiv, ...llistat){
  let div = document.getElementById(idDiv)
  let contingut = ""

  for (const element of llistat) {
    contingut = contingut.concat("<li>" + element + "</li>\n")
  }
  div.innerHTML ="<ul>" + contingut + "</ul>"

}
