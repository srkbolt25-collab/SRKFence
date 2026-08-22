'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RFQContextType {
  rfqItems: string[];
  addToRFQ: (productId: string) => void;
  removeFromRFQ: (productId: string) => void;
  clearRFQ: () => void;
  isInRFQ: (productId: string) => boolean;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export const RFQProvider = ({ children }: { children: ReactNode }) => {
  const [rfqItems, setRfqItems] = useState<string[]>([]);

  // Load RFQ items from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('rfq_items');
      if (stored) {
        try {
          setRfqItems(JSON.parse(stored));
        } catch (e) {
          console.error('Error parsing RFQ items:', e);
          setRfqItems([]);
        }
      }
    }
  }, []);

  // Listen for storage changes (for cross-tab updates)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'rfq_items') {
        try {
          const newItems = e.newValue ? JSON.parse(e.newValue) : [];
          setRfqItems(newItems);
        } catch (e) {
          console.error('Error parsing RFQ items from storage:', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Custom event listener for same-tab updates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleRFQUpdate = () => {
      const stored = localStorage.getItem('rfq_items');
      if (stored) {
        try {
          setRfqItems(JSON.parse(stored));
        } catch (e) {
          console.error('Error parsing RFQ items:', e);
        }
      }
    };

    window.addEventListener('rfq-updated', handleRFQUpdate);
    return () => window.removeEventListener('rfq-updated', handleRFQUpdate);
  }, []);

  const addToRFQ = (productId: string) => {
    const updated = [...rfqItems, productId];
    setRfqItems(updated);
    localStorage.setItem('rfq_items', JSON.stringify(updated));
    // Dispatch custom event for same-tab updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('rfq-updated'));
    }
  };

  const removeFromRFQ = (productId: string) => {
    const updated = rfqItems.filter(id => id !== productId);
    setRfqItems(updated);
    localStorage.setItem('rfq_items', JSON.stringify(updated));
    // Dispatch custom event for same-tab updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('rfq-updated'));
    }
  };

  const clearRFQ = () => {
    setRfqItems([]);
    localStorage.setItem('rfq_items', JSON.stringify([]));
    // Dispatch custom event for same-tab updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('rfq-updated'));
    }
  };

  const isInRFQ = (productId: string) => {
    return rfqItems.includes(productId);
  };

  return (
    <RFQContext.Provider
      value={{
        rfqItems,
        addToRFQ,
        removeFromRFQ,
        clearRFQ,
        isInRFQ,
      }}
    >
      {children}
    </RFQContext.Provider>
  );
};

export const useRFQ = () => {
  const context = useContext(RFQContext);
  if (context === undefined) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
};

