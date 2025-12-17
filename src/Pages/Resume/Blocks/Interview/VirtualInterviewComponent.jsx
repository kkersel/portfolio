import React, {useState} from 'react';
import inter from './VirtualInterviewComponent.module.scss';
import {createClient} from "@supabase/supabase-js";
import Lottie from "lottie-react";
import thumbsUpAnimation from './animations/thumbs-up.json';
// import clownAnimation from './animations/clown.json';

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY
);

const QUESTIONS = [
    {
        id: 'q1',
        question: 'Как ты определяете ценность фичей?',
        answer:
            'Через сочетание бизнес-метрик и пользовательских болей. Приоритизирую те решения, которые дают измеримый эффект для компании и решают реальные задачи пользователей',
    },
    {
        id: 'q2',
        question: 'Как ты работаете с метриками?',
        answer:
            'Определяю цели продукта и ключевых действий пользователя. Затем связываю дизайн-решения с конкретными показателями. Измеряю результаты',
    },
    {
        id: 'q3',
        question: 'Как ты подходите к UX-исследованиям?',
        answer:
            'Использую интервью, юзабилити-тесты и аналитику. Это помогает принимать решения не интуитивно, а на основе реальных данных ',
    },
    {
        id: 'q4',
        question: 'Плюсы и минусы',
        answer: "Умею работать в условиях высокой неопределенности и с задачами, которые нужно было сделать вчера. Могу выстроить процессы внутри команды. Слежу за тем, чтобы команда получала понятные макеты и не возвращалась с вопросами. " +
            "Минусы допишу чуть позже или расскажу на собесе"
    },
];

export default function VirtualInterviewComponent() {
    const [feedback, setFeedback] = useState({helpful: 0, cringe: 0});
    const [userVote, setUserVote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showGlobalAnimation, setShowGlobalAnimation] = useState(false);

    React.useEffect(() => {
        // Получаем текущие значения из Supabase
        const fetchFeedback = async () => {
            try {
                const {data, error} = await supabase
                    .from('feedback')
                    .select('helpful_count, cringe_count')
                    .eq('question_id', 'global')
                    .single();
                if (!error && data) {
                    setFeedback({helpful: data.helpful_count, cringe: data.cringe_count});
                }
            } catch (err) {
                console.error('Ошибка загрузки:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchFeedback();

        // Загружаем выбор пользователя из localStorage
        const savedVote = localStorage.getItem('feedback_vote_global');
        if (savedVote) setUserVote(savedVote);
    }, []);

    const sendVoteToSupabase = async (oldVote, newVote) => {
        try {
            const {error} = await supabase.rpc('update_feedback_vote', {
                qid: 'global',
                old_vote: oldVote,
                new_vote: newVote
            });
            if (error) console.error('Ошибка Supabase:', error.message);
        } catch (err) {
            console.error('Ошибка отправки:', err);
        }
    };

    const handleGlobalVote = (type) => {
        const previousVote = userVote;

        // Снятие выбора
        if (userVote === type) {
            setUserVote(null);
            setFeedback((prev) => ({...prev, [type]: Math.max(prev[type] - 1, 0)}));
            localStorage.removeItem('feedback_vote_global');
            sendVoteToSupabase(type, null); // уменьшить старый счётчик на сервере
            return;
        }

        // Обновляем локально для нового выбора
        setUserVote(type);
        setFeedback((prev) => {
            const next = {...prev};
            if (previousVote) next[previousVote] = Math.max(prev[previousVote] - 1, 0);
            next[type] = prev[type] + 1;
            return next;
        });

        localStorage.setItem('feedback_vote_global', type);
        sendVoteToSupabase(previousVote, type);

        setShowGlobalAnimation(true);
        setTimeout(() => setShowGlobalAnimation(false), 1500);
    };

    return (
        <div className={inter.viRoot}>
            <div className={inter.viTitleWrapper}>
                <h2 className={inter.viTitle}>FAQ</h2>
                {/*<Badge variant="default" size="large">*/}
                {/*    сохранит нам ~25 мин*/}
                {/*</Badge>*/}
            </div>
            {QUESTIONS.map((q) => (
                <div
                    key={q.id}
                    className={inter.viItem}
                >
                    <div className={inter.viQuestion}>{q.question}</div>
                    {q.id && (
                        <div className={inter.viAnswer}>
                            <div className={inter.viAnswerRow}>
                                <img src="/Ava.png" alt="avatar" className={inter.viAvatar}/>
                                <p>{q.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <div className={inter.viFeedbackBlock}>
                <button
                    className={`${inter.viBtnHelpful} ${userVote === "helpful" ? inter.activeHelpful : ""}`}
                    onClick={() => handleGlobalVote("helpful")}
                >
                    <p>👍</p>  <p>полезно</p>
                    <p>{loading ? <span
                        className={inter.skeleton}></span> : (feedback.helpful > 0 ? `${feedback.helpful}` : "0")}</p>
                </button>
                <button
                    className={`${inter.viBtnCringe} ${userVote === "cringe" ? inter.activeCringe : ""}`}
                    onClick={() => handleGlobalVote("cringe")}
                >
                    <p>🤡</p>
                    {/*<p>кринж</p>*/}
                    <p>{loading ? <span
                        className={inter.skeleton}></span> : (feedback.cringe > 0 ? `${feedback.cringe}` : "0")}</p>
                </button>
                {userVote && (
                    <p className={inter.viThanks}>Спасибо!</p>
                )}
            </div>
            {showGlobalAnimation && (
                <Lottie
                    animationData={thumbsUpAnimation}
                    loop={false}
                    className={inter.globalLottie}
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        width: 'min(800px, 100vw)',      // ограничиваем ширину по ширине экрана
                        height: 'min(800px, 100vw)'      // ограничиваем высоту по ширине экрана для сохранения пропорций
                    }}
                />
            )}
        </div>
    );
}
