const interObserver = (target, handleIntersect) => {

    if (!target) {
        return
    }

    let observer;

    let options = {
        root: null, /* not setting this property or using null sets root to viewport */
        rootMargin: "0px", /* negitive will set a inner distance */
        threshold: 1 /* 0 to 1 scale - 1 means the element has to be 100% in the viewport */
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(target);

}

export default interObserver;