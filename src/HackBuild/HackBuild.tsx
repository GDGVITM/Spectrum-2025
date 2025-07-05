import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import '../App.css';

interface Commands {
  [key: string]: () => string[];
}

function HackBuild() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Welcome to HackBuild Terminal',
    'We will update you on something interesting soon...',
    'Type "help" for available commands',
    ''
  ]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Commands = {
    help: () => [
      'Welcome to HackBuild Terminal',
      'We will update you on something interesting soon...',
      ''
    ]
  };

  const handleCommand = (cmd: string): string[] => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setTerminalHistory([]);
      return [];
    }
    
    if (commands[trimmedCmd]) {
      return commands[trimmedCmd]();
    }
    
    return [`bash: ${cmd}: command not found`, ''];
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const output = handleCommand(currentInput);
      setTerminalHistory(prev => [
        ...prev,
        `user@hackbuild:~$ ${currentInput}`,
        ...output
      ]);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div
        className="about-container relative mt-20 min-h-screen w-screen overflow-y-auto"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {/* Particle system */}
        <div className="particle-system">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="grid-overlay"></div>

        {/* Scanning line */}
        <div className="scan-line"></div>

        {/* Accent lines */}
        <div className="accent-lines">
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
        </div>

        {/* Enhanced random halo effects */}
        <div className="random-halo-1"></div>
        <div className="random-halo-2"></div>
        <div className="random-halo-3"></div>
        <div className="random-halo-4"></div>
        <div className="random-halo-5"></div>
        <div className="random-halo-6"></div>
        <div className="random-halo-7"></div>

        <div className="absolute inset-0 bg-no-repeat min-h-[100vh] w-full mobile-no-bg">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute inset-0 green-hallow"></div>
          <div className="relative pt-8 pb-8 flex flex-col items-center text-center z-10">
            
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#A1E9A5] font-bold mb-8 text-shadow"
              style={{ fontFamily: 'Press Start 2P' }}
            >
              HACKBUILD
            </h2>

            {/* Terminal section */}
            <div className="relative w-[98%] sm:w-[95%] max-w-none mb-8 flex justify-center items-center">
              <div className="textbox-container" style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="content-area">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  <div className="terminal-box" onClick={focusInput} style={{ 
                    borderRadius: '0',
                    border: '1px solid #A1E9A5',
                    backgroundColor: '#000000',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                  }}>
                    <div className="terminal-content" ref={terminalRef}>
                      <div className="terminal-output">
                        {terminalHistory.map((line, index) => (
                          <div key={index} className="terminal-line" style={{ 
                            fontSize: '18px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            lineHeight: '1.4'
                          }}>
                            {line}
                          </div>
                        ))}
                      </div>
                      <div className="terminal-input-line" style={{ 
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace'
                      }}>
                        <span className="terminal-prompt">developer@hackbuild:~$ </span>
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                          <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="terminal-input"
                            autoFocus
                            spellCheck={false}
                            style={{
                              fontSize: '18px',
                              fontWeight: 'bold',
                              fontFamily: 'monospace'
                            }}
                          />
                          <span 
                            className={`terminal-cursor ${showCursor ? 'visible' : 'hidden'}`}
                            style={{ 
                              position: 'absolute',
                              left: `${currentInput.length * 0.65}em`,
                              top: '0',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}
                          >█</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HackBuild;