export default function looseLeaf() {

const page = document.getElementById("looseLeaf")
const ctx = page.getContext("2d")
page.width = "820"
page.height = "400"

let lineWidth = page.width
let lineHeight = page.height

drawBackground()
drawLines()
drawText()

function drawBackground() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, page.width, page.height)
    ctx.fill()
}

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
    ctx.fillStyle = "black"
    ctx.fillText("Favorite Quotes!", 120, 24)
    ctx.fillText("I love my friends and I love coding :)", 120, 74)
    ctx.fillText("- Ivan", 120, 99)
    ctx.fillText("\"It's tragic how few people ever 'possess their souls before they die.'", 115, 149)
    ctx.fillText("'Nothing is more rare in any man', says Emerson, 'than an act of his own.'", 115, 174)
    ctx.fillText("It is quite true. Most people are other people. Their thoughts are", 118, 199)
    ctx.fillText("someone else's opinions, their life a mimicry, their passions a quotation.\"", 118, 224)
    ctx.fillText("- Oscar Wilde", 118, 249)
}

ctx.beginPath()
ctx.moveTo(110, 0)
ctx.lineTo(110, lineHeight)
ctx.strokeStyle = "red"
ctx.stroke()


} // end looseLeaf()