"use client";
import { X } from 'lucide-react';

interface ImageModalProps {
    image: string | null;
    onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
    if (!image) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center transition-all duration-300 ease-in-out"
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
                <X className="w-8 h-8" />
            </button>
            
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <img
                    src={image}
                    alt="Full size"
                    className="max-w-[95vw] max-h-[95vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};

export default ImageModal; 