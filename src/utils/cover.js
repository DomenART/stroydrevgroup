export default (el) => {
    if (!el) return false

    el.style.position = 'absolute'
    el.style.top = '50%'
    el.style.left = '50%'
    el.style.transform = 'translate(-50%,-50%)'

    if (el.clientWidth > el.clientHeight) {
        el.style.width = 'auto'
        el.style.height = '100%'
    } else {
        el.style.width = '100%'
        el.style.height = 'auto'
    }
}
