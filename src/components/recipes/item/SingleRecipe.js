
import classes from './SingleRecipe.module.css';

function SingleRecipe(props){
    return (
        <div>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <div>{props.stars}</div>
                <div className={classes['cooking-detail']}>
                    <ul>
                        <li className={classes['cooking-info']}>
                            <div className={classes['cooking-info-time time-item']}>
                                <div className={classes['cooking-icon']}>
                                    <svg viewBox="0 0 24 24" class="icon" data-v-eaa40da4=""><path d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11S1 18.065 1 12 5.935 1 12 1zm0 2.42c-4.731 0-8.58 3.849-8.58 8.58s3.849 8.58 8.58 8.58 8.58-3.849 8.58-8.58S16.731 3.42 12 3.42zm0 1.982c.668 0 1.21.542 1.21 1.21v4.79l2.847 2.944a1.21 1.21 0 01-1.74 1.683l-3.187-3.298a1.21 1.21 0 01-.34-.84V6.612c0-.668.541-1.21 1.21-1.21z" data-v-eaa40da4=""></path></svg>
                                </div>
                                <div className={classes['cooking-text cooking-text-time']}>
                                    <p>Cooking time</p>
                                </div>
                            </div>
                            <div className={classes['cooking-info-text time-text']}>
                                <p>
                                    <span>About&nbsp;</span>
                                    <span>{props.cookingTime}&nbsp;</span>
                                    <span>minutes</span>
                                </p>
                            </div>
                        </li>
                        <li className={classes['cooking-info']}>
                            <div className={classes['cooking-info-time calorie-item']}>
                                <div className={classes['cooking-icon']}>
                                <svg viewBox="0 0 24 24" class="icon" data-v-eaa40da4=""><path d="M11.047 20.758C9.563 20.5 8.35 19.283 8.085 17.8a3.66 3.66 0 011.126-3.366 2.498 2.498 0 004.995 0 3.663 3.663 0 011.187 2.695 3.688 3.688 0 01-4.346 3.628m7.678-8.944l-1.01-2.288-3.018-7.754a1.209 1.209 0 00-2.06-.333 12.13 12.13 0 00-2.78 7.068l-.722-.88a1.198 1.198 0 00-1.04-.44c-.397.032-.753.26-.95.608l-2.134 3.767c-1.36 2.397-1.347 5.264.034 7.667 1.34 2.33 3.722 3.74 6.39 3.77h.27c2.597-.029 4.996-1.37 6.42-3.583a8.018 8.018 0 00.6-7.602" data-v-eaa40da4=""></path></svg>
                                </div>
                                <div className={classes['cooking-text cooking-text-calorie']}>
                                    <p>Calorie</p>
                                </div>
                            </div>
                            <div className={classes['cooking-info-text calorie-text']}>
                                <p>
                                    <span>{props.kcal}&nbsp;</span>
                                    <span>kcal</span>
                                </p>
                            </div>        
                        </li>
                        <li className={classes['cooking-info']}>
                            <div className={classes['cooking-info-time cost-item']}>
                                <div className={classes['cooking-icon']}>
                                <svg viewBox="0 0 24 24" class="icon" data-v-eaa40da4=""><path d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11S1 18.065 1 12 5.935 1 12 1zm0 2.42c-4.731 0-8.58 3.849-8.58 8.58s3.849 8.58 8.58 8.58 8.58-3.849 8.58-8.58S16.731 3.42 12 3.42zm1.084 2.612a1.21 1.21 0 012.233.936l-1.498 3.572H15.3a1.21 1.21 0 010 2.42h-2.09V14h2.09a1.21 1.21 0 010 2.42h-2.09v1.63a1.211 1.211 0 11-2.42 0v-1.63H8.7a1.21 1.21 0 010-2.42h2.09v-1.04H8.7a1.21 1.21 0 010-2.42h1.427l-1.6-3.542a1.21 1.21 0 112.206-.995l1.225 2.714z" data-v-eaa40da4=""></path></svg>
                                </div>
                                <div className={classes['cooking-text']}>
                                    <p>Estimated cost</p>
                                </div>
                            </div>
                            <div className={classes['cooking-info-text time-text']}>
                                <p>
                                    <span>Around&nbsp;</span>
                                    <span>{props.cost}&nbsp;</span>
                                    <span>vnds</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes['cooking-description']}>
                    <p>{props.description}</p>
                </div>
                <div className={classes['cooking-content-detail']}>
                    <div className={classes['recipe-ingredients']}>
                        <h2>
                            <span>Ingredients&nbsp;</span>
                            <span>For 2 people</span>
                        </h2>
                        <ul className={classes['ingredients-list']}>
                            <li className={classes['ingredient']}>1</li>
                            <li className={classes['ingredient']}>2</li>
                            <li className={classes['ingredient']}>3</li>
                            <li className={classes['ingredient']}>4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleRecipe;