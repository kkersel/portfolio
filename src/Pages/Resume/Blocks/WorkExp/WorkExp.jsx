import React from 'react';
import styles from './WorkExp.module.scss';

const WorkExp = () => {
    return (
        <div className={styles.workExpCard} data-name="Work Exp" data-node-id="73:381">
            <div className={styles.WorkExpWrapper}>
                <h3>Опыт работы</h3>
                <a href="https://productstar.ru/" target="_blank" rel="noopener noreferrer" className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/PS.jpeg" alt="TennisBooking" className={styles.companyLogo} />

                        <div>
                            <p className={styles.title} data-node-id="73:387">PRODUCTSTAR x РБК</p>
                            <p className={styles.description} data-node-id="73:388">Ментор. 2025 – now</p>
                        </div>
                    </div>
                </a>


                <a href="https://mar-lab.ru/" target="_blank" rel="noopener noreferrer" className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/ML.png" alt="TennisBooking" className={styles.companyLogo} />

                        <div>
                            <p className={styles.title} data-node-id="73:387">Market Lab</p>
                            <p className={styles.description} data-node-id="73:388">Product designer. 2023 – 2025</p>
                        </div>
                    </div>
                </a>

                <a href="https://apps.apple.com/us/app/bazgain-tourism/id6745242907" target="_blank"
                   rel="noopener noreferrer" className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/bazgain.png" alt="bazgain" className={styles.companyLogo} />
                        <div>
                            <p className={styles.title} data-node-id="73:392">Bazgain</p>
                            <p className={styles.description} data-node-id="73:393">Ведущий Product designer. 2024 – 2025</p>
                        </div>
                    </div>
                </a>

                <div className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/Speech.png" alt="Speech" className={styles.companyLogo} />
                        <div>
                            <p className={styles.title} data-node-id="73:398">Speech</p>
                            <p className={styles.description} data-node-id="73:399">UX/UI designer 2024</p>
                        </div>
                    </div>
                </div>

                <a href="https://www.tbank.ru/" target="_blank" rel="noopener noreferrer" className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/tlogo.png" alt="Tinkoff" className={styles.companyLogo} />
                        <div>
                            <p className={styles.title} data-node-id="73:405">Tinkoff</p>
                            <p className={styles.description} data-node-id="73:406">Product designer. 2023</p>
                        </div>
                    </div>
                </a>

                <a href="https://t.me/Farsh_burger_bot" target="_blank" rel="noopener noreferrer"
                   className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/farsh.png" alt="UP2U" className={styles.companyLogo} />
                        <div>
                            <p className={styles.title} data-node-id="73:411">UP2U</p>
                            <p className={styles.description} data-node-id="73:412">UX designer. 2021 — 2022</p>
                        </div>
                    </div>
                </a>

                <a href="https://okzo-systems.ru/#calculation" target="_blank" rel="noopener noreferrer"
                   className={styles.info}>
                    <div className={styles.companyInfo}>
                        <img src="/OS.jpg" alt="OkzoSystmes" className={styles.companyLogo} />
                        <div>
                            <p className={styles.title} data-node-id="73:419">okzo-systems</p>
                            <p className={styles.description} data-node-id="73:420">Front-end dev 20 – 2021</p>
                        </div>
                    </div>
                </a>
            </div>


                <div className={styles.WorkExpWrapper}>
                    <h3>Pet-проекты</h3>
                    <a href="https://t.me/tbookcao_bot" target="_blank" rel="noopener noreferrer"
                       className={styles.info}>
                        <div className={styles.companyInfo}>
                            <img src="/TB.jpg" alt="TennisBooking" className={styles.companyLogo} />
                            <div>
                                <p className={styles.title} data-node-id="73:419">Tennis Booking</p>
                                <p className={styles.description} data-node-id="73:420">Full Stack 2025 – now</p>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
);
};

export default WorkExp;