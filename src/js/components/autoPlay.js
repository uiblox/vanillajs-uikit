import interObserver from "../utility/interObserver";

const autoPlay = {
    init() {
        this.videos = document.querySelectorAll('.video');
        if (!this.videos) {
            return;
        }
        this.setObserver();
    },
    setObserver() {
        this.videos.forEach(video => {
            interObserver(video, this.setPlay);
        })
    },
    setPlay(vid) {
        const video = vid[0];
        const videoContainer = video.target.parentNode;
        const videoBtn = videoContainer.querySelector('.video__icon');
        if (video.isIntersecting) {
            video.target.currentTime = 0;
            video.target.play();
            videoBtn.style.visibility = "hidden";
        } else {
            video.target.pause();
            videoBtn.style.visibility = "visible";
        }
    }
}

export default autoPlay;