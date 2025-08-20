// This file provides a service for text-to-speech functionality using the browser's built-in Web Speech API.
// It's designed as a Singleton, meaning there will only ever be one instance of this service running in the app.

export class TextToSpeechService {
    private static instance: TextToSpeechService;
    private synthesis: SpeechSynthesis | null = null;
    private voices: SpeechSynthesisVoice[] = [];
  
    // The getInstance method ensures that we always use the same instance of the service.
    static getInstance(): TextToSpeechService {
      if (!TextToSpeechService.instance) {
        TextToSpeechService.instance = new TextToSpeechService();
      }
      return TextToSpeechService.instance;
    }
  
    constructor() {
      // We need to check if we're in a browser environment and if the SpeechSynthesis API is available.
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        this.synthesis = window.speechSynthesis;
        this.loadVoices();
        
        // The list of available voices is loaded asynchronously, so we need to listen for the 'voiceschanged' event.
        window.speechSynthesis.onvoiceschanged = () => {
          this.loadVoices();
        };
      }
    }
  
    // Loads and stores the available voices from the browser.
    private loadVoices() {
      if (this.synthesis) {
        this.voices = this.synthesis.getVoices();
      }
    }
  
    // Finds an available French voice, preferring a "French (France)" voice if available.
    private getFrenchVoice(): SpeechSynthesisVoice | null {
      const frenchVoices = this.voices.filter(voice => 
        voice.lang.startsWith('fr') || voice.lang === 'fr-FR'
      );
      
      // Prioritize the fr-FR voice for more authentic pronunciation.
      const frenchFranceVoice = frenchVoices.find(voice => voice.lang === 'fr-FR');
      return frenchFranceVoice || frenchVoices[0] || null;
    }
  
    // The main method to speak a given text. It returns a Promise to handle the asynchronous nature of speech.
    async speak(text: string, options: {
      rate?: number;
      pitch?: number;
      volume?: number;
      onEnd?: () => void;
      onError?: (error: Error) => void;
    } = {}): Promise<boolean> {
      return new Promise((resolve, reject) => {
        if (!this.synthesis) {
          const error = new Error('Speech synthesis not supported in this browser.');
          options.onError?.(error);
          reject(error);
          return;
        }
  
        // Stop any speech that is currently in progress to avoid overlap.
        this.synthesis.cancel();
  
        const utterance = new SpeechSynthesisUtterance(text);
        const frenchVoice = this.getFrenchVoice();
        
        if (frenchVoice) {
          utterance.voice = frenchVoice;
        } else {
          console.warn("No French voice found. Using default voice.");
        }
        
        utterance.lang = 'fr-FR';
        utterance.rate = options.rate || 0.9; // Slightly slower for clarity
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
  
        utterance.onend = () => {
          options.onEnd?.();
          resolve(true);
        };
  
        utterance.onerror = (error) => {
          options.onError?.(error);
          reject(error);
        };
  
        this.synthesis.speak(utterance);
      });
    }
  
    // Stops the speech synthesis immediately.
    stop() {
      if (this.synthesis) {
        this.synthesis.cancel();
      }
    }
  
    // A helper method to check if the browser supports the Web Speech API.
    isSupported(): boolean {
      return typeof window !== 'undefined' && 'speechSynthesis' in window;
    }
  }
  
  // Export a single instance of the service for easy import and use across the app.
  export const ttsService = TextToSpeechService.getInstance();
  