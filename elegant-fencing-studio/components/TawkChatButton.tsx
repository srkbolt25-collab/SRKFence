'use client';

declare global {
  interface Window {
    Tawk_API?: { maximize?: () => void; showWidget?: () => void; hideWidget?: () => void };
  }
}

export default function TawkChatButton() {
  const openChat = () => {
    if (typeof window !== 'undefined' && window.Tawk_API?.maximize) {
      window.Tawk_API.showWidget?.();
      window.Tawk_API.maximize();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <button type="button" className="custom-chat-button" onClick={openChat} aria-label="Chat now with SRK Steel">
      Chat Now
    </button>
  );
}
