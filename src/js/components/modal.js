const Modal = {
    init() {
        this.buttons = document.querySelectorAll('.button');
        this.modals = document.querySelectorAll('.modal');
        if (!this.buttons.length) {
            return;
        }
        if (!this.modals.length) {
            return;
        }
        this.registerModalListeners();
        this.registerModalTraps();
    },
    registerModalListeners() {
        Array.from(this.buttons).forEach(ele => {
            if (ele.classList.contains("button__modal-trigger")) {
                this.setHandler(ele);
            }
            if (ele.classList.contains("button__modal-close")) {
                this.closeHandler(ele);
            }
        })
    },
    registerModalTraps() {
        Array.from(this.modals).forEach(modal => {
            this.keyBoardTrap(modal);
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
        Modal.toggleModal(modal);
    },
    toggleModal(modal) {
        const body = document.querySelector('body');

        modal.classList.toggle('modal__state-hidden');

        if (!modal.classList.contains('modal__state-hidden')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    },
    closeModal() {
        const target = this.getAttribute('data-close-modal');
        const modal = document.querySelector(`[data-modal=${target}]`);
        const modalTrigger = document.querySelector(`[data-modal-trigger=${target}]`);
        modalTrigger.focus();
        Modal.toggleModal(modal);

    },
    keyBoardTrap(ele) {
        ele.addEventListener('keydown', modalTrap);
        const focusableChildren = ele.querySelectorAll('a, button');
        const first = focusableChildren[0];
        const last = focusableChildren[focusableChildren.length - 1];

        function modalTrap(e) {
            console.log(focusableChildren)
            if (e.keyCode === 9) {
                if (e.shiftKey) {
                    //if first element is focused, go to the last element
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus()
                    }
                } else {
                    //if last element is focused, go to the first element
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
            // escape key closes modal
            if (e.keyCode === 27) {
                closeModal();
            }
        }
    }
}

export default Modal;
