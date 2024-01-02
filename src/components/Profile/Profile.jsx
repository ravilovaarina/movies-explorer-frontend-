import Header from "../Header/Header";

export default function Profile({ isBurgerOpened, loggedIn, onClickBurger }) {
    return(
        <>
        <Header themePurple={false} loggedIn={loggedIn} isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger}/>
        <main className="profile">
            <div className="profile__container">
                <h2 className="profile__greeting">Привет, Виталий!</h2>
            </div>
        </main>
        </>
    )
}