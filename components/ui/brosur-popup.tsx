'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Brosur {
  id: string;
  imageUrl: string;
  linkUrl: string;
  aktif: boolean;
}

const BrosurPopup = () => {
  const [brosur, setBrosur] = useState<Brosur | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchBrosur = async () => {
      try {
        const res = await fetch('/api/brosur');
        const data = await res.json();
        if (data && data.aktif) {
          setBrosur(data);
          setIsOpen(true);
        }
      } catch (error) {
        console.error('Error fetching brosur:', error);
      }
    };

    fetchBrosur();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || !brosur) {
    return null;
  }

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg p-4 bg-white rounded-lg shadow-lg"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 text-gray-500 bg-white rounded-full hover:text-gray-800 z-10"
        >
          <X size={24} />
        </button>
        <a href={brosur.linkUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={brosur.imageUrl}
            alt="Brosur"
            width={500}
            height={700}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default BrosurPopup;
