import styleCode from './assets/style.scss'

const style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(styleCode))
document.getElementsByTagName('head')[0].appendChild(style)
