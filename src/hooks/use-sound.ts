import { useCallback } from 'react';

interface WebKitAudioContext extends AudioContext {
  webkitAudioContext: AudioContext;
}

export function useSound() {
  const play = useCallback(() => {
    const context = new (window.AudioContext || (window as unknown as WebKitAudioContext).webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    
    oscillator.connect(gain);
    gain.connect(context.destination);
    
    oscillator.frequency.setValueAtTime(200, context.currentTime);
    gain.gain.setValueAtTime(0.1, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.1);
  }, []);

  return { play };
} 