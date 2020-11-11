import AgoraRTC from 'agora-rtc-sdk'

const APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID

class VideoStream {
  localStream = {}

  remoteStreams = {}

  constructor(userId, shareScreen = false) {
    this.localStream = AgoraRTC.createStream({
      streamID: userId,
      audio: true,
      video: !shareScreen,
      screen: !!shareScreen,
    })
    this.client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' })
    this.initClient()
  }
  
  close = () => {
    this.localStream.close()
  }

  stop = () => {
    this.localStream.stop()
  }

  initClient = () => {
    this.client.init(
      APP_ID,
      () => {
        console.log('Agora client initalized successfully')
      },
      (err) => {
        console.log('Agora client init failed', err)
      }
    )
    this.subscribeToClient()
  }

  initLocalStream = (id, roomId, userId, onInit) => {
    this.localStream.init(
      () => {
        console.log('getUserMedia successfully')
        onInit()
        this.localStream.play(id)
        this.joinChannel(roomId, userId)
      },
      (err) => {
        console.log('getUserMedia failed', err)
      }
    )
  }

  joinChannel = (roomId, userId) => {
    this.client.join('0b129377515e43889543cec7fec454ff', roomId, userId, (uid) => {
      const logMessage = 'User ' + uid + ' join channel successfully'
      console.log(logMessage)
      this.client.publish(this.localStream, err => {
        console.log('Publish local stream error', err)
      })

      this.client.on('stream-published', evt => {
        console.log('Publish local stream successfully')
      })
    }, err => {
      console.log('Join channel failed', err)
    })
  }

  subscribeToClient = () => {
    this.client.on('stream-added', this.onStreamAdded)
    this.client.on('stream-subscribed', this.onRemoteClientAdded)
    this.client.on('stream-removed', this.onStreamRemoved)
    this.client.on('peer-leave', this.onPeerLeave)
  }

  onStreamAdded = (event) => {
    let stream = event.stream
    console.log('New stream added: ', stream.getId())
    const { remoteStreams } = this
    const newId = stream.getId()
    const updatedStreams = Object.assign({}, remoteStreams, {
      [newId]: stream,
    })

    this.updateStreams(updatedStreams)

    this.client.subscribe(stream, (err) => {
      console.log('Subscribe stream failed', err)
    })
  }

  onRemoteClientAdded = (evt) => {
    const remoteStream = evt.stream
    console.log('Remote stream added: ', remoteStream.getId())
    this.remoteStreams[remoteStream.getId()].play(
      'agora_remote' + remoteStream.getId()
    )
    this.updateStreams(this.remoteStreams)
  }

  onStreamRemoved = (evt) => {
    const me = this
    const stream = evt.stream
    if (stream) {
      const streamId = stream.getId()
      const { remoteStreams } = me
      stream.stop()
      delete remoteStreams[streamId]
      this.updateStreams(remoteStreams)
      console.log('Remote stream removed', stream.getId())
    }
  }

  onPeerLeave = (evt) => {
    const me = this
    const stream = evt.stream
    if (stream) {
      const streamId = stream.getId()
      const { remoteStreams } = me
      stream.stop()
      delete remoteStreams[streamId]
      this.updateStreams(remoteStreams)
      console.log('Remote stream is removed', stream.getId())
    }
  }

  updateStreams = (remoteStreams) => {
    this.remoteStreams = remoteStreams
  }
}

export default VideoStream
