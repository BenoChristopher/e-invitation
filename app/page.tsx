"use client";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleTap() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    }
  }

  return (
    <main className="video-only-page">
      <video
        ref={videoRef}
        className="full-video"
        playsInline
        preload="auto"
        onClick={handleTap}
        onTouchEnd={handleTap}
        onEnded={() => videoRef.current?.pause()}
      >
        <source src="/wedding-invitation.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
