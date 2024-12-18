import videoSources from './videos.json' with { type: 'json' }

const videoElement = document.querySelector('video')
const videoAnchorElement = document.querySelector('a')

function playNextVideo() {
  const videoInfo = videoSources[
    Math.floor(
      Math.random() * videoSources.length
    )
  ]
  videoElement.src = videoInfo.video
  videoAnchorElement.href = videoInfo.page
  videoAnchorElement.textContent = videoInfo.page
  videoElement.play()
}

videoElement.addEventListener('ended', () => {
  playNextVideo()
})

videoElement.addEventListener('error', () => {
  playNextVideo()
})

playNextVideo()
