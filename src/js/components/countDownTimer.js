const countDownTimer = {
    init() {
        this.timers = Array.prototype.slice.call(document.querySelectorAll('.countdown__container'));
        if (!this.timers) {
            return;
        }

        this.timers.forEach(timer => {
            this.time = timer;
            countDownTimer.count(this.time);
        })
    },
    count(root) {
        let pendulum;
        let targetDate;
        const eleDate = root.getAttribute('data-countdown');

        if (eleDate === '') {
            const d = new Date();
            targetDate = d.setDate(d.getDate() + 1);
        } else {
            targetDate = new Date(eleDate);
        }

        pendulum = setInterval(() => {
            const current = Date.now();
            const diff = targetDate - current;
            if (diff < 0) {
                clearTimeout(pendulum);
            }
            countDownTimer.logTime(diff, root);
        }, 1000);
    },
    logTime(diff, root) {
        const dayDisplay = root.querySelector('.countdown__days');
        const hourDisplay = root.querySelector('.countdown__hours');
        const minsDisplay = root.querySelector('.countdown__mins');
        const secsDisplay = root.querySelector('.countdown__secs');

        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const mins = Math.floor(diff / 1000 / 60) % 60;
        const secs = Math.floor(diff / 1000) % 60;

        dayDisplay.textContent = `${days < 10 ? 0 : ''}${days} :`;
        hourDisplay.textContent = `${hours < 10 ? 0 : ''}${hours} :`;
        minsDisplay.textContent = `${mins < 10 ? 0 : ''}${mins} :`;
        secsDisplay.textContent = `${secs < 10 ? 0 : ''}${secs}`;
        if (diff < 0) {
            dayDisplay.textContent = `00 :`;
            hourDisplay.textContent = `00 :`;
            minsDisplay.textContent = `00 :`;
            secsDisplay.textContent = `00`;
        }
    }
}

export default countDownTimer;
