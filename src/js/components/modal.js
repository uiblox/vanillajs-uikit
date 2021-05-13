const Modal = {
    init() {
        this.modal = document.querySelectorAll('.modal__trigger')

        if (!this.modal.length) {
            return;
        }

        this.registerEventListener();
    },
    registerEventListener() {
        Array.from(this.modal).forEach(ele => {
            this.eventHandler(ele)
        })
    },
    eventHandler(ele) {
        ele.addEventListener('click', this.toggleModal)
    },
    toggleModal() {
        const target = this.getAttribute('data-modal-trigger');
        const modal = document.querySelector(`[data-modal=${target}]`);
        const body = document.querySelector('body');

        modal.classList.toggle('modal__state-hidden')

        if (!modal.classList.contains('modal__state-hidden')) {
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
        }
    }
}

export default Modal;
