import ForumNavBar from "../../partials/navBar/ForumNavBar";
import ForumSideBar from "../../partials/sidebar/ForumSideBar";

export default function ForumLayout(){
    return(
        <div>
            <ForumNavBar/>
            <div className="flex">
                <div className="w-1/4">
                    <ForumSideBar/>
                </div>
                <div className="w-3/4">
                    p
                </div>
            </div>
        </div>
    )
}