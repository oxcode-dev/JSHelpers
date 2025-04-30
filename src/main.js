import { capitalize, dehyphenate, slugify, numberFormat, ucwords, prettierUrl } from './helper'

let app = document.getElementById('app')
let string = 'Hello world, I am the best man at your wedding last year'
let slugString = slugify(string)
document.getElementById('capitalize').innerHTML = capitalize('hello World')
document.getElementById('slugify').innerHTML = slugify(slugString)
document.getElementById('dehyphenate').innerHTML = dehyphenate(slugString)
document.getElementById('ucwords').innerHTML = ucwords(string)
document.getElementById('prettierUrl').innerHTML = prettierUrl('http://www.facebook.com')
document.getElementById('numberFormat').innerHTML = numberFormat(1234567890)


