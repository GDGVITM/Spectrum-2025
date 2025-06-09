import { useState, useEffect } from 'react'

function Hackbuild() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [blinkCursor, setBlinkCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const cursorTimer = setInterval(() => {
      setBlinkCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="h-screen w-screen mt-18 bg-transparent text-green-400 text-base p-6 overflow-hidden fixed inset-0" style={{fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace"}}>
      <div className="w-full h-full">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4 text-xs text-green-300">
          <div>MINGW64:/c/hackbuild</div>
          <div>{currentTime.toLocaleString()}</div>
        </div>
        
        {/* Welcome Banner */}
        <div className="mb-6">
          <div className="text-green-300 mb-2">
            ╔══════════════════════════════════════════════════════════════╗
          </div>
          <div className="text-green-300 mb-1">
            ║                    Welcome to HackBuild Terminal              ║
          </div>
          <div className="text-green-300 mb-1">
            ║                                                              ║
          </div>
          <div className="text-green-300 mb-1">
            ║  Build • Hack • Create • Deploy                              ║
          </div>
          <div className="text-green-300 mb-2">
            ╚══════════════════════════════════════════════════════════════╝
          </div>
        </div>

        {/* Terminal History */}
        <div className="space-y-1 mb-2">
          <div className="text-yellow-400">
            <span className="text-green-300">HackBuild@Spectrum</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/hackbuild</span>
            <span className="text-white">$ </span>
            <span className="text-yellow-400">ls -la</span>
          </div>
          
          <div className="text-yellow-400 mt-3">
            <span className="text-green-300">HackBuild@Spectrum</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/hackbuild</span>
            <span className="text-white">$ </span>
            <span className="text-yellow-400">git status</span>
          </div>
          <div className="text-gray-300 ml-4">
            <div className="text-green-400">On branch main</div>
            <div>Your branch is up to date with 'origin/main'.</div>
            <div className="mt-1">nothing to commit, working tree clean</div>
          </div>
        </div>

        {/* Status Message */}
        <div className="mb-4 text-cyan-400">
          <div className="animate-pulse">
            [INFO] More details about HackBuild will be revealed soon...
          </div>
        </div>

        {/* Current Prompt */}
        <div className="flex items-center">
          <span className="text-green-300">HackBuild@Spectrum</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/hackbuild</span>
          <span className="text-white">$ </span>
          <span className={`${blinkCursor ? 'bg-green-400' : 'bg-transparent'} w-2 h-4 inline-block ml-1`}></span>
        </div>
      </div>
    </div>
  )
}

export default Hackbuild