import interObserver from "../utility/interObserver";

const autoPlay = {
    init() {
        this.videos = document.querySelectorAll('.video');
        if (!this.videos) {
            return
        }
        this.setObserver();
    },
    setObserver() {
        this.videos.forEach(video => {
            interObserver(video, this.setPlay)
        })
    },
    setPlay(vid) {
        const video = vid[0]
        if (video.isIntersecting) {
            video.target.currentTime = 0;
            video.target.play();
        } else {
            video.target.pause();
        }
    }
}

export default autoPlay;