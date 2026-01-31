'use client'

// Note: Framer Motion would be ideal here but sticking to pure CSS / keyframes logic via a simple wrapper 
// to avoid extra heavy dependencies unless requested.
// We will use a simple CSS animation class wrapper.

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-fade-up">
            {children}
        </div>
    )
}
