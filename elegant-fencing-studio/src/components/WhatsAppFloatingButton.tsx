'use client';

const WHATSAPP_NUMBER = "971522160874";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-[80] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-xl opacity-70 animate-pulse" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.45)]">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.12c-.28-.14-1.64-.81-1.9-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-.97 2.44.03 1.44 1.02 2.84 1.16 3.03.14.19 1.97 3.01 4.77 4.23.67.29 1.19.47 1.59.6.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33zm-3.09 8.91h-.01c-1.86 0-3.68-.5-5.26-1.45l-.38-.23-3.91 1.02 1.04-3.81-.25-.39a10.18 10.18 0 0 1-1.57-5.42c0-5.64 4.59-10.23 10.23-10.23 2.73 0 5.29 1.06 7.22 2.98a10.16 10.16 0 0 1 3 7.22c0 5.64-4.59 10.31-10.31 10.31zm8.72-19.03A12.09 12.09 0 0 0 16.02 4C9.33 4 3.89 9.44 3.89 16.13c0 2.13.56 4.21 1.63 6.04L4 28l6.01-1.58a12.07 12.07 0 0 0 5.96 1.53h.01c6.69 0 12.13-5.44 12.13-12.13 0-3.24-1.26-6.28-3.55-8.82z" />
        </svg>
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;
