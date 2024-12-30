import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQItem;