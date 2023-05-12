import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App () {
    return(

        <section className='App'>
            <TwitterFollowCard userName="jf56" name="Juana Fernanda Estrada" urlImage="https://cdn-icons-png.flaticon.com/512/2810/2810670.png"/>
            <TwitterFollowCard userName="rb89" name="Roberto Alejandro Estrada" urlImage="https://cdn-icons-png.flaticon.com/512/6075/6075889.png"/>
            <TwitterFollowCard userName="alb123" name="Alberto Ramos" urlImage="https://cdn-icons-png.flaticon.com/512/1754/1754806.png"/>
            <TwitterFollowCard userName="MJ" name="Michael Jackson"/>
        </section>

    )
}

// ANOTHER WAY OF RENDERING
// export function App () {
//     const pheralb = {isFollowing:true, userName: 'pheralb', name:'Alonso Eduardo Mejia', urlImage:'https://cdn-icons-png.flaticon.com/512/6076/6076493.png'}
//     return(
//         <section className='App'>
//             <TwitterFollowCard {...pheralb}/>
//         </section>
//     )
// }