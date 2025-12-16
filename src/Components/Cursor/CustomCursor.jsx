// CustomCursor.jsx
import React, { useEffect, useState, useCallback } from "react";
import './CustomCursor.scss';

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHover, setIsHover] = useState(false);
    const [isPointerDown, setIsPointerDown] = useState(false);
    
    // Используем requestAnimationFrame для оптимизации анимации
    const [rafId, setRafId] = useState(null);
    const [pendingPosition, setPendingPosition] = useState(null);

    const updatePosition = useCallback(() => {
        if (pendingPosition) {
            setPosition(pendingPosition);
            setPendingPosition(null);
        }
        setRafId(null);
    }, [pendingPosition]);

    const handleMouseMove = useCallback((e) => {
        // Обновляем позицию только через requestAnimationFrame для лучшей производительности
        setPendingPosition({ x: e.clientX, y: e.clientY });
        
        if (!rafId) {
            setRafId(requestAnimationFrame(updatePosition));
        }
    }, [rafId, updatePosition]);

    const handleMouseOver = useCallback((e) => {
        if (e.target.closest('.cursorhover, button, a, .link, .badge, .cursor-pointer')) {
            setIsHover(true);
        } else {
            setIsHover(false);
        }
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsPointerDown(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsPointerDown(false);
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, rafId]);

    return (
        <div
            className={`custom-cursor ${isHover ? 'hover' : ''} ${isPointerDown ? 'active' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};