
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
            const target = ele.getAttribute('data-modal-trigger')
            const modal = document.querySelector(`[data-modal=${target}]`)
            ele.addEventListener('click', () => {
                this.toggleModal(modal)
            })
        })
    },
    toggleModal(modal) {
        modal.classList.toggle('modal__state-hidden')
    }
}

export default Modal;