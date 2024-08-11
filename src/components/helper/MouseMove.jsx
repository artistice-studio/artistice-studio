import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function MouseMove({ className, text }) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const [displayText, setDisplayText] = useState(text);

    const handleMouseOver = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) =>
                        index < iteration ? text[index] : letters[Math.floor(Math.random() * 26)]
                    )
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span className={` ${className}`} id="mouse-move" onMouseOver={handleMouseOver}>
            {displayText}
        </span>
    );
}
