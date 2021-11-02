const r2 = Math.sqrt(2)
const r3 = Math.sqrt(3)
let valores = [
    [1, 0],
    [r3, 1],
    [1, 1],
    [1, r3],
    [0, 1],
    [-1, r3],
    [-1, 1],
    [-r3, 1],
    [-1, 0],
    [-r3, -1],
    [-1, -1],
    [-1, -r3],
    [0, -1],
    [1, -r3],
    [1, -1],
    [r3, -1]
]
valores.forEach(e => {
    let angle = Math.round(Math.atan(e[1]/e[0])*18000/pi)/100
    if(e[0] < 0) {
        angle += 180
    } else {
        if (e[1] < 0) {
            angle += 360
        }
    }
    console.log(e, ' ', angle)
})