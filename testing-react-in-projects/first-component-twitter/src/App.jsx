import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "patti smith",
        name: "Patricia Lee Smith",
        isFollowing: true,
        urlImage: "https://i1.wp.com/www.blogderocha.com.br/wp-content/uploads/2015/11/pat1.jpg?fit=523%2C530&ssl=1"
    },
    {
        userName:"steve perry", 
        name:"Stephen Ray Perry", 
        urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvt61p8a9fqfBm4dxNVIGnsVHXiZ6T7Rt1t3U0BAoMg6kGRt3-HRJ6ZEkj1UjR_Qx7es&usqp=CAU",
    },
    {
        userName: "bono vox", 
        name:"Paul David Hewson", 
        urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46qepfEW4iTyiUhWR8Pn1mXBZoZmxKB8gXj7FdXgyHpF5Kk7lAB1vSxLYEy5lrxexCDI&usqp=CAU",
    },
    {
        userName: "MJ", 
        name: "Michael Jackson", 
        isFollowing: true, 
        urlImage: "https://los40es00.epimg.net/los40/imagenes/2016/09/07/actualidad/1473239738_477693_1473239936_noticia_normal.jpg",
    },
]

export function App () {
    return (
        <section className = 'App'>
            {
                users.map(({userName, name, isFollowing, urlImage }) => {
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            urlImage={urlImage}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

// ANOTHER WAY OF RENDERING
// export function App () {
//     return(

//         <section className='App'>
//             <TwitterFollowCard userName="patti smith" children="Patricia Lee Smith" initialIsFollowing={true} urlImage="https://i1.wp.com/www.blogderocha.com.br/wp-content/uploads/2015/11/pat1.jpg?fit=523%2C530&ssl=1"/>
//             <TwitterFollowCard userName="steve perry" children="Stephen Ray Perry" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvt61p8a9fqfBm4dxNVIGnsVHXiZ6T7Rt1t3U0BAoMg6kGRt3-HRJ6ZEkj1UjR_Qx7es&usqp=CAU"/>
//             <TwitterFollowCard userName="bono vox" children="Paul David Hewson" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46qepfEW4iTyiUhWR8Pn1mXBZoZmxKB8gXj7FdXgyHpF5Kk7lAB1vSxLYEy5lrxexCDI&usqp=CAU"/>
//             <TwitterFollowCard userName="MJ" children="Michael Jackson" initialIsFollowing={true} urlImage={"https://los40es00.epimg.net/los40/imagenes/2016/09/07/actualidad/1473239738_477693_1473239936_noticia_normal.jpg"}/>
//         </section>

//     )
// }

// ANOTHER WAY OF RENDERING
// export function App () {
//     const pheralb = {isFollowing:true, userName: 'pheralb', name:'Alonso Eduardo Mejia', urlImage:'https://cdn-icons-png.flaticon.com/512/6076/6076493.png'}
//     return(
//         <section className='App'>
//             <TwitterFollowCard {...pheralb}/>
//         </section>
//     )
// }