"use client";

import { useState, useRef } from "react";
import { Mic } from "lucide-react";

interface VoiceSearchProps {
    onResult: (text: string) => void;
}

export default function VoiceSearch({ onResult }: VoiceSearchProps) {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    const handleMicClick = async () => {
        if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
            return;
        }

        if (!("webkitSpeechRecognition" in window)) {
            alert("Voice recognition not supported in this browser.");
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch {
            alert("Microphone permission denied!");
            return;
        }

        const SpeechRecognition = (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = "en-IN";
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onstart = () => setIsListening(true);

        recognitionRef.current.onend = () => {
            if (!isListening) return;
            recognitionRef.current.start();
        };

        recognitionRef.current.onresult = (event: any) => {
            const text = event.results[event.results.length - 1][0].transcript;
            onResult(text);
        };

        recognitionRef.current.start();
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Mic
                size={18}
                onClick={handleMicClick}
                style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    color: isListening ? "red" : "gray",
                    transform: isListening ? "scale(1.2)" : "scale(1)",
                }}
            />

            {isListening && (
                <div style={{ display: "flex", gap: "4px" }}>
                    <span className="bar" style={barStyle(0.1)}></span>
                    <span className="bar" style={barStyle(0.2)}></span>
                    <span className="bar" style={barStyle(0.3)}></span>
                </div>
            )}

            <style jsx>{`
        @keyframes updown {
          0% { transform: scaleY(0.6); }
          50% { transform: scaleY(1.6); }
          100% { transform: scaleY(0.6); }
        }
        .bar {
          width: 3px;
          height: 12px;
          background: red;
          border-radius: 2px;
          animation: updown 0.6s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
}

const barStyle = (delay: number) => ({
    animationDelay: `${delay}s`,
});
