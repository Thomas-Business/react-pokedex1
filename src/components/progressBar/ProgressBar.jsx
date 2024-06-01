import React from 'react';
import CSS from './ProgressBar.module.css';

function getInterpolatedColor(percentage) {
    const startColor = { r: 255, g: 0, b: 0 }; // Rouge
    const endColor = { r: 0, g: 0, b: 255 }; // Vert

    const r = startColor.r + (endColor.r - startColor.r) * (percentage / 100);
    const g = startColor.g + (endColor.g - startColor.g) * (percentage / 100);
    const b = startColor.b + (endColor.b - startColor.b) * (percentage / 100);

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function ProgressBar({ label, value, maxValue }) {
    const percentage = (value / maxValue) * 100;
    const interpolatedColor = getInterpolatedColor(percentage);

    return (
        <div className={CSS.progressBarContainer}>
            <div className={CSS.label}>{label}</div>
            <div className={CSS.progressBar}>
                <div className={CSS.filler} style={{ width: `${percentage}%`, backgroundColor: interpolatedColor }}></div>
            </div>
            <div className={CSS.value}>{value}</div>
        </div>
    );
}