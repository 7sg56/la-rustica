"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Check } from "lucide-react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 20, x: "-50%" }}
                    className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full shadow-2xl border border-white/20"
                >
                    <div className="bg-green-500 rounded-full p-1">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium text-sm">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
