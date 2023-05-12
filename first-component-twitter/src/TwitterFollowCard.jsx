export function TwitterFollowCard ({userName, name, urlImage, isFollowing}) {
    console.log(isFollowing)
    return (
        
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={urlImage} 
                    alt="avatar-1" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Follow
                </button>
            </aside>
        </article>
    )
}