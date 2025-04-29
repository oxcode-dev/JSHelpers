import { capitalize, dehyphenate, slugify, numberFormat, ucwords } from './helper'

let app = document.getElementById('app')
let slugString = slugify('Hello world, I am the best man at your wedding last year')
document.getElementById('capitalize').innerHTML = capitalize('hello World')
document.getElementById('slugify').innerHTML = slugify(slugString)
document.getElementById('dehyphenate').innerHTML = dehyphenate(slugString)
document.getElementById('ucwords').innerHTML = ucwords(slugString)
document.getElementById('numberFormat').innerHTML = numberFormat(1234567890)

