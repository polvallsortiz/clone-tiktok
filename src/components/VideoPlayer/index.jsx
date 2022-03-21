import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/a30b459578a8fcf50a38bb80cc541878/6238ddf6/video/tos/useast2a/tos-useast2a-ve-0068c001/345137e7a07f4740834a7221264d5591/?a=1988&amp;br=2036&amp;bt=1018&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-307nz7Th9q.MDXq&amp;l=202203211419430101890780161A451F1E&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anR2cGc6Zm8zOzMzNzczM0ApM2c6ODtoOjs8NzQ1OGg3aGdpa2NtcjQwaWtgLS1kMTZzcy9gMmE0Yy5hNmEtX2MwYDU6Yw%3D%3D&amp;vl=&amp;vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>

  )
}
