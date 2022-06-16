const page = document.getElementById("looseLeaf")
ctx = page.getContext("2d")
page.width = "800"
page.height = "400"

let lineWidth = page.width
let lineHeight = page.height

drawLines()
drawText()

function drawLines() {

    for (let lineHeight = 25; lineHeight < page.height; lineHeight = lineHeight + 25) {
        ctx.beginPath()
        ctx.moveTo(0, lineHeight)
        ctx.lineTo(lineWidth, lineHeight)
        ctx.strokeStyle = "lightblue"
        ctx.stroke()
    }
}
function drawText() {
    ctx.beginPath()
    ctx.font = '20px Comic Sans MS'
    ctx.fillText("I love my friends and I love coding :)", 120, 25)
}

ctx.beginPath()
ctx.moveTo(110, 0)
ctx.lineTo(110, lineHeight)
ctx.strokeStyle = "red"
ctx.stroke()
