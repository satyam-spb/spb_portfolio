import React, { useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  
  // Premium Mechanical Switch / Mouse Click Sound
  const playClickSound = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Signal chain: Oscillator -> Filter -> Gain -> Destination
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      // Sawtooth wave provides rich harmonics for the "mechanical" feel
      osc.type = 'triangle'; 
      
      // Pitch envelope: Drop pitch quickly to simulate the tactile bump/bottom out
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.08);
      
      // Lowpass filter envelope: Open slightly then close to mimic plastic housing dampening
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);

      // Amplitude envelope: Sharp attack, very short sustain, fast decay
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio play failed", e);
    }
  }, []);

  const handleClick = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="group p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-600 group-hover:text-indigo-600 transition-colors" />
      )}
    </button>
  );
};