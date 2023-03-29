import React from 'react';

import './auth-form.scss';

const AuthForm: React.FC = () => {
    return (
        <form className="auth-form">
            <legend className="auth-form__name">Simple Hotel Check</legend>

            <div className="auth-form__inputs">
                <label className="auth-form__label">
                    <span>Логин</span>
                    <input
                        className="auth-form__input"
                        type="text"
                    />
                </label>

                <label className="auth-form__label">
                    <span>Пароль</span>
                    <input
                        className="auth-form__input"
                        type="password"
                    />
                </label>
            </div>

            <button
                className="auth-form__button"
                type="submit"
            >
                Войти
            </button>
        </form>
    );
};

export default AuthForm;
