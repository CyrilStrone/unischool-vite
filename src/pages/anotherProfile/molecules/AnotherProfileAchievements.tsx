import "../styles/AnotherProfileAchievements.css"

interface IAnotherProfileAchievements {
    id: number,
}

export const AnotherProfileAchievements = (params:IAnotherProfileAchievements) => {
    return (
        <div className="AnotherProfileAchievements">
            <div className="AnotherProfileAchievements__Title">
            Достижения
            </div>
            <div className="AnotherProfileAchievements__Item">

            </div>
        </div >
    );
};
