import MiniProfile from "./MiniProfile";
import Stories from "./Stories";
import Posts from "./Posts";
import Suggestions from "./Suggestions";


function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 max-w-6xl mx-auto">
            {/*Section*/}
        <section className="col-span-2">           
            {/*Stories*/}
            <Stories />
            <Posts />



            {/*Posts*/}
        </section>

            <section className="hidden xl:inline-block">
            
            <div>
                <MiniProfile />
                <Suggestions />
            </div>
            {/*Section*/}
            {/*miniprofile*/}
             {/*추천*/}
            </section>
        </main>
    );
}

export default Feed;
