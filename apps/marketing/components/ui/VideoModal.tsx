'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', () => { }); // cleanup listener if unmounted while open
        };
    }, [isOpen]);

    if (!mount) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-5xl z-10 pointer-events-none flex items-center justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-black rounded-xl md:rounded-2xl shadow-2xl w-full overflow-hidden relative pointer-events-auto border border-white/10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header/Close */}
                            <div className="absolute top-4 right-4 z-20">
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Native Video Player */}
                            <div className="aspect-video w-full bg-black relative">
                                <video
                                    src={videoSrc}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                    playsInline
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
