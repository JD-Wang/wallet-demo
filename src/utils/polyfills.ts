import * as buffer from 'buffer'

if (typeof (window as any).global === 'undefined') {
  ;(window as any).global = window
}

;(window as any).process = {
  env: { DEBUG: undefined }
}

if (typeof (window as any).Buffer === 'undefined') {
  ;(window as any).Buffer = buffer.Buffer
}

export default {}
