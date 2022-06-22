
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <div className="grid wide container">
            <div className={classes['nav-bar']}>
                <div className={classes['nav-bar__title']}>
                    <Link to='/'>簡単ランチ</Link>
                </div>
                <div className={classes['nav-bar__action']}>
                    <div className={classes['nav-bar__search']}>
                        <form>
                            <button type="submit">Search</button>
                            <input type="search" placeholder="料理名・食材でレシピを検索。" />
                        </form>
                    </div>
                    <Link to='/login'>
                        <div className={classes['nav-bar__signin']}>
                            <div className={classes.signin__icon}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                            <div className={classes.signin__text}>
                                <b>ログイン</b>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;