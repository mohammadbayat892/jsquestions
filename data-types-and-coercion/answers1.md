typeof ''= string
typeof 'hadi'= string
typeof 'true'= string
typeof true = boolean
typeof function () {}= function
typeof (() => {})= function
typeof 10 = number
typeof undefined = undefined
typeof null = object
typeof typeof null = string
typeof typeof 'anything' = string
typeof { name: 'hadi' } = object
typeof NaN = number
typeof new Date() = object
typeof new BigInt('100000000000000000') = object
typeof class foo {} = function
typeof Math = object
Boolean(undefined) = false
Boolean(null) = false
Boolean(false) = false
Boolean(10) = true
Boolean(-1) = true
Boolean(+0) = false
Boolean(-0) = false
Boolean(0) = false
Boolean(NaN) = false
Boolean('') = false