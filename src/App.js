import './App.scss';
import React, {useEffect, useState} from "react";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Components/404Page/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CustomCursor } from './Components/Cursor/CustomCursor';
import CaseDetail from "./Pages/Resume/Blocks/Cases/CaseDetail";
import Navigation from "./Components/Navigation/Navigation";
import ImageRating from "./Pages/ImageRating/ImageRating";

function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => {
        // Определяем, есть ли поддержка тач-событий
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            // Убираем hover-класс при тачах
            try {
                // Отключаем все hover-эффекты
                for (let styleSheet of document.styleSheets) {
                    if (!styleSheet.rules) continue;
                    for (let i = styleSheet.rules.length - 1; i >= 0; i--) {
                        const rule = styleSheet.rules[i];
                        if (rule.selectorText && rule.selectorText.includes(':hover')) {
                            styleSheet.deleteRule(i);
                        }
                    }
                }
            } catch (e) {
                console.warn('Не удалось отключить hover стили:', e);
            }

            // Также убираем стандартный tap highlight
            document.body.style.webkitTapHighlightColor = 'transparent';
        }
    }, []);

    // Добавляем или удаляем класс для темной темы
    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [darkTheme]);
    
    return (
        <div>
            <CustomCursor/>
            <BrowserRouter>
                <Navigation darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routes>
                    <Route path="/" element={<Resume darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
                    <Route path="/Resume" element={<Resume darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
                    <Route path="/case/:caseId" element={<CaseDetail darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
                    <Route path="/image-rating" element={<ImageRating darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
                    <Route path="*" element={<NotFound darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
