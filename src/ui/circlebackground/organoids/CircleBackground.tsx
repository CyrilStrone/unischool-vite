import "../styles/CircleBackground.css"
import EllipseOne from "../../../common/assets/authorization/EllipseOne.png"
import EllipseTwo from "../../../common/assets/authorization/EllipseTwo.png"
import Background from '../../../common/assets/circlebackground/Background.png'
export const CircleBackground = () => {
    return (
        <div className="CircleBackground">
            <img className="CircleBackground__One" src={Background} alt="Background" />
        </div>
    );
};
