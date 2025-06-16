'use client';

import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  message: string;
};

export default function Modal({ isOpen, onClose, type, message }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-[#264533] rounded-2xl shadow-xl w-[90%] max-w-md p-6 z-50 relative text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
            >
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {type === 'follower' ? 'New Follower' : type}
              </h2>
              <p className="text-sm">{message}</p>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-[#94C7A8] text-[#122117] hover:bg-[#79b691] hover:cursor-pointer"
                >
                  Okay
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
