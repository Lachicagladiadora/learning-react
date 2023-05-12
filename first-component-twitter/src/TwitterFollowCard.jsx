import { useState } from "react"

export function TwitterFollowCard ({userName, name: children, urlImage}) {

    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    // 
    const [isFollowing, setIsFollowing] = useState(false)

    console.log(isFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={urlImage} 
                    alt="avatar-1" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick = {handleClick}> 
                    {text}
                </button>
            </aside>
        </article>
    )
}