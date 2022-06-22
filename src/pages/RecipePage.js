
import { useParams } from "react-router-dom";

import SingleRecipe from "../components/recipes/item/SingleRecipe";

function RecipePage(props){
    let {id} = useParams();
    console.log(id);
    return (
        <div>
        <SingleRecipe
            title='abcde'
            stars='4.5'
            description='abaerb wefwe weqg qwefwe qwef'
            image='https://cdn.ttgtmedia.com/rms/onlineImages/SideCOM_git-reflog-before-git-remote-add-origin_001_half_column_mobile.jpg'
            cookingTime='10'
            kcal='20'
            cost='200000'
        />
        </div>
    );
}

export default RecipePage;