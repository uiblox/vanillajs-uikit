const Modal = {
    init() {
        this.buttons = document.querySelectorAll('.button');

        if (!this.buttons.length) {
            return;
        }

        this.registerEventListener();
    },
    registerEventListener() {
        Array.from(this.buttons).forEach(ele => {
            if (ele.classList.contains("button__modal-trigger")) {
                this.setHandler(ele);
            }
            if (ele.classList.contains("button__modal-close")) {
                this.closeHandler(ele);
            }
        })
    },
    setHandler(ele) {
        ele.addEventListener('click', this.setModal);
    },
    closeHandler(ele) {
        ele.addEventListener('click', this.closeModal);
    },
    setModal() {
        const target = this.getAttribute('data-modal-trigger');
        const modal = document.querySelector(`[data-modal=${target}]`);
        Modal.toggleModal(modal)
    },
    toggleModal(modal) {
        const body = document.querySelector('body');

        modal.classList.toggle('modal__state-hidden');

        if (!modal.classList.contains('modal__state-hidden')) {
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
        }
    },
    closeModal() {
        const target = this.getAttribute('data-close-modal');
        const modal = document.querySelector(`[data-modal=${target}]`);
        Modal.toggleModal(modal)
    }
}

export default Modal;
