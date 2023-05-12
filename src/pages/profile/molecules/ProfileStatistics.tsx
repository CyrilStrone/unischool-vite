import "../styles/ProfileStatistics.css"
import Like from '../../../common/assets/profile/Like.png'
import Fire from '../../../common/assets/profile/Fire.png'

interface IProfileStatistics {
    shockMode: string,
    totalPoints: string
}

export const ProfileStatistics = (params: IProfileStatistics) => {
    return (
        <div className="ProfileStatistics">
            <div className="ProfileStatistics__Title">
            Статистика
            </div>
            <div className="ProfileStatistics__Bar">
                <div className="ProfileStatistics__Bar__shockMode ProfileStatistics__Bar__Block">
                    <img src={Fire} className="ProfileStatistics__Bar__shockMode__Image ProfileStatistics__Bar__Block__Image" alt="" />
                    <div className="ProfileStatistics__Bar__shockMode ProfileStatistics__Bar__Block__Info">
                        <div className="ProfileStatistics__Bar__shockMode__Title ProfileStatistics__Bar__Block__Title">
                        Ударный режим
                        </div>
                        <div className="ProfileStatistics__Bar__shockMode__Data ProfileStatistics__Bar__Block__Data">
                        {params.shockMode + " " + "дня"}
                        </div>
                    </div>
                </div>
                <div className="ProfileStatistics__Bar__totalPoints ProfileStatistics__Bar__Block">
                    <img src={Like} className="ProfileStatistics__Bar__totalPoints__Image ProfileStatistics__Bar__Block__Image" alt="" />
                    <div className="ProfileStatistics__Bar__totalPoints ProfileStatistics__Bar__Block__Info">
                        <div className="ProfileStatistics__Bar__totalPoints__Title ProfileStatistics__Bar__Block__Title">
                        Всего очков
                        </div>
                        <div className="ProfileStatistics__Bar__totalPoints__Data ProfileStatistics__Bar__Block__Data">
                        {params.totalPoints + " " + "очков"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
