class Scroll {
    constructor(exclude = null) {
        this.exclude = exclude
        this.keys = {37: 1, 38: 1, 39: 1, 40: 1}
        this.isExclude = this.isExclude.bind(this)
        this.preventDefault = this.preventDefault.bind(this)
        this.preventDefaultForScrollKeys = this.preventDefaultForScrollKeys.bind(this)
    }

    isExclude(e) {
        if (!this.exclude)
            return false

        if (this.exclude.contains(e.target) || this.exclude == e.target) {
            if (e.deltaY > 0) {
                if (this.exclude.scrollTop + this.exclude.offsetHeight < this.exclude.scrollHeight)
                    return true
            } else {
                if (this.exclude.scrollTop > 0)
                    return true
            }
        }

        return false
    }

    enable() {
        // console.log('enable')
        // if (window.removeEventListener)
        //     window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    disable() {
        // console.log('disable')
        // if (window.addEventListener) // older FF
        //     window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.onwheel = this.preventDefault; // modern standard
        window.ontouchmove  = this.preventDefault; // mobile
        document.onkeydown  = this.preventDefaultForScrollKeys;
    }

    preventDefault(e) {
        if (!this.isExclude(e)) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;

        }
    }

    preventDefaultForScrollKeys(e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }
}

export default Scroll