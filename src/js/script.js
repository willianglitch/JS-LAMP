const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")
const body = document.getElementById("body")
const title = document.getElementById("title")
const lampBord = document.getElementById("lampLight")
const squareBord = document.getElementById("squareLigth")

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./src/assets/lampada-acesa.png"
    body.style.backgroundColor = "#000000"
    title.style.color = "#fff"
    lampBord.style.borderColor = "#fff59d"
    lampBord.style.setProperty(
      "box-shadow",
      "0 0 30px #f2ff15 , 0 0 60px #ff9100 , 0 0 100px #f26627 "
    )
    squareBord.style.borderColor = "#e1ede0"
    squareBord.style.setProperty(
      "box-shadow",
      "0 0 30px #7e67ce , 0 0 60px #3f57de , 0 0 1000px #2025ae"
    )
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./src/assets/lampada-apagada.png"
    body.style.backgroundColor = "#FFF"
    title.style.color = "#000"
    lampBord.style.borderColor = "#8da0a4"
    squareBord.style.borderColor = "#8da0a4"
    squareBord.style.removeProperty("box-shadow")
    lampBord.style.removeProperty("box-shadow")
  }
}

function lampBroken() {
  lamp.src = "./src/assets/lampada-quebrada.png"
  body.style.backgroundColor = "#FFF"
  title.style.color = "#000000"
  lampBord.style.borderColor = "#8da0a4"
  lampBord.style.removeProperty("box-shadow")
  squareBord.style.borderColor = "#8da0a4"
  lampBord.style.removeProperty("box-shadow")
  squareBord.style.removeProperty("box-shadow")
}

turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
