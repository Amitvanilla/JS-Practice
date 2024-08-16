
// add(1)(2)(3)
const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'



// add(1,2,3)
function curry(args){
    console.log(args.length)
    return function ff(...s){
        if(s.length <= args.length){
            console.log(join.apply(this, args))
        }
        else{
            return function (...m){
                console.log(ff.apply(this, args.concat(m)))
            }
        }
    }
}