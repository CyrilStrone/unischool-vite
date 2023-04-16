import "../styles/AnotherProfileStatistics.css"
import Like from '../../../common/assets/profile/Like.png'
import Fire from '../../../common/assets/profile/Fire.png'

interface IAnotherProfileStatistics {
    shockMode: string,
    totalPoints: string
}
export const AnotherProfileStatistics = (params: IAnotherProfileStatistics) => {


    return (
        <div className="AnotherProfileStatistics">
            <div className="AnotherProfileStatistics__Title">
            Статистика
            </div>
            <div className="AnotherProfileStatistics__Bar">
                <div className="AnotherProfileStatistics__Bar__shockMode AnotherProfileStatistics__Bar__Block">
                    <img src={Fire} className="AnotherProfileStatistics__Bar__shockMode__Image AnotherProfileStatistics__Bar__Block__Image" alt="" />
                    <div className="AnotherProfileStatistics__Bar__shockMode AnotherProfileStatistics__Bar__Block__Info">
                        <div className="AnotherProfileStatistics__Bar__shockMode__Title AnotherProfileStatistics__Bar__Block__Title">
                        Ударный режим
                        </div>
                        <div className="AnotherProfileStatistics__Bar__shockMode__Data AnotherProfileStatistics__Bar__Block__Data">
                        {params.shockMode + " " + "дня"}
                        </div>
                    </div>
                </div>
                <div className="AnotherProfileStatistics__Bar__totalPoints AnotherProfileStatistics__Bar__Block">
                    <img src={Like} className="AnotherProfileStatistics__Bar__totalPoints__Image AnotherProfileStatistics__Bar__Block__Image" alt="" />
                    <div className="AnotherProfileStatistics__Bar__totalPoints AnotherProfileStatistics__Bar__Block__Info">
                        <div className="AnotherProfileStatistics__Bar__totalPoints__Title AnotherProfileStatistics__Bar__Block__Title">
                        Всего очков
                        </div>
                        <div className="AnotherProfileStatistics__Bar__totalPoints__Data AnotherProfileStatistics__Bar__Block__Data">
                        {params.totalPoints + " " + "очков"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
