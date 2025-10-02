import "./style.css";
import closetPath from "../../assets/task2/shelf.png";
import carPath from "../../assets/task2/car.png";
import boatPath from "../../assets/task2/boat.png";
import boyPath from "../../assets/task2/boy.png";
export default function Task1() {
  return (
    <>
      <h1>Задание 2</h1>
      <div className="container">
        <img src={closetPath} alt="closet" className="closet-img" />
        <div className="toy car">
          <img src={carPath} alt="car" className="toy-img" />
        </div>
        <div className="toy boat">
          <img src={boatPath} alt="boat" className="toy-img" />
        </div>
        <img src={boyPath} alt="boy" className="boy-img" />
      </div>
    </>
  );
}
