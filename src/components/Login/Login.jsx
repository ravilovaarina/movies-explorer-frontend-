import logo from '../../images/logo.svg';
import { useEffect } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useFormValidator from '../../hooks/ValidateForm';

export default function Login() {
    const { isValid, values, errors, resetForm, handleChange } = useFormValidator();

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        resetForm();
    }, [resetForm])

    return (
        <>
            <div className="signin">
                <div className="signin__container">
                    <img src={logo} alt="логотип" name='signin' className="signin__logo" />
                    <h1 className="signin__greeting">Рады видеть!</h1>
                    <form className="signin__form" onSubmit={handleSubmit} noValidate>
                        <label className="signin__label">
                            <span className="signin__label-text">E-mail</span>
                            <input
                                name='email'
                                type="email"
                                className={`signin__input ${errors.name && 'signin__input_error'}`}
                                onChange={handleChange}
                                value={values.email || ''}
                                required
                            />
                            <span className="signin__error">{errors.email || ''}</span>
                        </label>
                        <label className="signin__label">
                            <span className="signin__label-text">Пароль</span>
                            <input
                                name='password'
                                type="password"
                                className={`signin__input ${errors.password && 'signin__input_error'}`}
                                onChange={handleChange}
                                value={values.password || ''}
                                required
                            />
                            <span className="signin__error">{errors.password || ''}</span>
                        </label>
                        <button
                            className="signin__submit"
                            disabled={!isValid}
                        >Войти</button>
                        <span className="signin__text">
                            Ещё не зарегистрированы?&nbsp;
                            <Link to='/signup' className='signin__link'>Регистрация</Link>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}