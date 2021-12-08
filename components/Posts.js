import { UserAddIcon } from "@heroicons/react/outline";
import Post from "./Post";


const posts = [

    {
        id : '1',
        username : 'an_taewoo',
        userImg : 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        img: 'https://images.pexels.com/photos/10099179/pexels-photo-10099179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption : "People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try",
    },
    {
        id : '2',
        username : 'an_taewoo',
        userImg : 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        img: 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        caption : "People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try",
    },
    {
        id : '3',
        username : 'an_taewoo',
        userImg : 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        img: 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        caption : "People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try",
    },
    {
        id : '4',
        username : 'an_taewoo',
        userImg : 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        img: 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        caption : "People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try",
    },
    {
        id : '5',
        username : 'an_taewoo',
        userImg : 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        img: 'https://post-phinf.pstatic.net/MjAyMDA0MjhfMTYy/MDAxNTg4MDY2MDYyMTA2.5gN5mVvocXpM_i38N9MkBdeaoSTW0hm5gjYfT9qBERgg.rCD1RK-JBEj2RT9zwol-dmk0Uf_od3Z7saVUgv-T6Ygg.PNG/1_IYuLiUD6k6t8uICaJgG-sA.png?type=w1200',
        caption : "People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try",
    },
]

function Posts() {
    return (
        <div>
            {posts.map((post) => (
            <Post 
            key = {post.id} 
            id={post.id}
            username = {post.username}
            userImg = {post.userImg}
            img = {post.img}
            caption ={post.caption}
            />
 
            ))}  
        </div>
    );
}

export default Posts;
