import "./PowerStatsComponent.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PowerStatsComponent({ power }) {
  console.log(power);
  return (
    <>
      <div className="h1 text-center power-heading my-5">
        {" "}
        🔥 POWER STATS 🔥
      </div>
      <div className="container d-flex">
        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["intelligence"]}
            text={`${power["intelligence"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "green",
              trailColor: "white",
            })}
          />
          <span className="Strength">Intelligence</span>
        </div>

        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["strength"]}
            text={`${power["strength"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "red",
              trailColor: "white",
            })}
          />
          <span className="Strength">Strength</span>
        </div>

        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["speed"]}
            text={`${power["speed"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "yellow",
              trailColor: "white",
            })}
          />
          <span className="Strength">Speed</span>
        </div>

        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["durability"]}
            text={`${power["durability"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "silver",
              trailColor: "white",
            })}
          />
          <span className="Strength">Durability</span>
        </div>

        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["power"]}
            text={`${power["power"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "orange",
              trailColor: "white",
            })}
          />
          <span className="Strength">Power</span>
        </div>

        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["combat"]}
            text={`${power["combat"]}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "maroon",
              trailColor: "white",
            })}
          />
          <span className="Strength">combat</span>
        </div>
      </div>
    </>
  );
}
export default PowerStatsComponent;
