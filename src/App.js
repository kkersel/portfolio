import './App.scss';
import React, {useEffect} from "react";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Components/404Page/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CustomCursor } from './Components/Cursor/CustomCursor';
import CaseDetail from "./Pages/Resume/Blocks/Cases/CaseDetail";

function App() {
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
    
    return (
        <div>
            <CustomCursor/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Resume/>}/>
                    <Route path="/Resume" element={<Resume/>}/>
                    <Route path="/case/:caseId" element={<CaseDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
