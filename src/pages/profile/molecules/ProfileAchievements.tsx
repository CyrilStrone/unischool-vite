import "../styles/ProfileAchievements.css"

interface IProfileAchievements {
    id: number,
}

export const ProfileAchievements = (params:IProfileAchievements) => {
    return (
        <div className="ProfileAchievements">
            <div className="ProfileAchievements__Title">
            Достижения
            </div>
            <div className="ProfileAchievements__Item">

            </div>
        </div >
    );
};
