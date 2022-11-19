for (let i = 0; i < 10; i++) {
   const x = Math.floor(Math.random() * 10)
   const y = Math.floor(Math.random() * 10)

   let op = Math.floor(Math.random() * 2)

   let n 

   if (op === 0) {
    n = x + y
   } else if (op === 1) {
    n = x - y
   } 
   if (op === 2) {
    n = x * y
   }

   let op_v

   if (n == x + y) {
    op_v = 'plus'
   } else if (n == x * y) {
    op_v = 'multiply'
   } 
   if (n == x - y) {
    op_v = 'minus'
   }

   console.log(`${x} ${op_v} ${y} = ${n}`)
}
