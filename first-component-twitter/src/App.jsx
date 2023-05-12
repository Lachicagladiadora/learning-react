import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return(
        <>
            <section className='App'>
                <TwitterFollowCard isFollowing={true} userName="jf56" name="Juana Fernanda Estrada" urlImage="https://cdn-icons-png.flaticon.com/512/2810/2810670.png"/>
                <TwitterFollowCard isFollowing={false} userName="rb89" name="Roberto Barrios" urlImage="https://cdn-icons-png.flaticon.com/512/6075/6075889.png"/>
                <TwitterFollowCard isFollowing={false} userName="alb123" name="Alberto Ramos" urlImage="https://cdn-icons-png.flaticon.com/512/1754/1754806.png"/>
                <TwitterFollowCard isFollowing userName="MJ" name="Michael Jackson"/>
            </section>
        </>
    )
}