import React from 'react';

const SignatureBadge = () => {
    return (
        <div className="fixed bottom-3 right-4 z-50 group text-sm cursor-pointer">
            <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-1 rounded-full shadow-md border border-gray-700 transition-transform hover:scale-105">
                Developed by <span className="text-blue-400 font-semibold">Sid</span> with <span className="animate-pulse">❤️</span>
            </div>
        </div>
    );
};

export default SignatureBadge;
