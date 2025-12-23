// CustomCursor.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import './CustomCursor.scss';

export const CustomCursor = () => {
    const [isHover, setIsHover] = useState(false);
    const [isPointerDown, setIsPointerDown] = useState(false);
    
    // Для более плавного движения используем интерполяцию
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
    const smoothness = 0.15; // Коэффициент плавности движения

    // Используем useRef для хранения ID requestAnimationFrame
    const rafIdRef = useRef(null);

    // Функция для плавного перехода позиции
    useEffect(() => {
        const animate = () => {
            setSmoothPosition(prevPos => ({
                x: prevPos.x + (targetPosition.x - prevPos.x) * smoothness,
                y: prevPos.y + (targetPosition.y - prevPos.y) * smoothness
            }));
            
            rafIdRef.current = requestAnimationFrame(animate);
        };

        rafIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [targetPosition, smoothness]);

    const handleMouseMove = useCallback((e) => {
        setTargetPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseOver = useCallback((e) => {
        if (e.target.closest('.cursorhover, button, a, .link, .badge, .cursor-pointer, .button, .nav-item, .case-card, .project-card, .card, .btn, .nav-link, .menu-item, .clickable, .interactive, .tab, .tabs, .tab-item, .tab-link, [href], [onclick], [role="button"], [tabindex], .pointer, .hoverable, .selectable')) {
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
        document.addEventListener('mouseout', () => setIsHover(false));
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', () => setIsHover(false));
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

    // Добавляем и удаляем класс для body в зависимости от состояния курсора
    useEffect(() => {
        if (isHover || isPointerDown) {
            document.body.classList.add('custom-cursor-active');
        } else {
            document.body.classList.remove('custom-cursor-active');
        }

        return () => {
            document.body.classList.remove('custom-cursor-active');
        };
    }, [isHover, isPointerDown]);

    // Определяем, какое изображение использовать
    const cursorImage = isHover ? '/pointer.svg' : '/default.svg';

    return (
        <div
            className={`custom-cursor ${isHover ? 'hover' : ''} ${isPointerDown ? 'active' : ''}`}
            style={{
                left: `${smoothPosition.x}px`,
                top: `${smoothPosition.y}px`,
                backgroundImage: `url('${cursorImage}')`,
            }}
            role="presentation"
            data-cursor-state={isHover ? 'hover' : 'normal'}
        />
    );
};