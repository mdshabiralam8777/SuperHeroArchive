import "./PowerStatsComponent.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OtherConnectionComp from "./OtherConnectionComp";

function PowerStatsComponent({ power,connection }) {
  return (
    <>
      <div className="h1 text-center power-heading my-5">
        {" "}
        🔥 POWER STATS 🔥
      </div>
      <div className="container d-flex">
        <div className="text-center power-stats-circle mb-5">
          <CircularProgressbar
            value={power["combat"] !== 'null' ? power["combat"] : 0}
            text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
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
           value={power["combat"] !== 'null' ? power["combat"] : 0}
           text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
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
           value={power["combat"] !== 'null' ? power["combat"] : 0}
           text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
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
           value={power["combat"] !== 'null' ? power["combat"] : 0}
           text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
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
            value={power["combat"] !== 'null' ? power["combat"] : 0}
            text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
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
            value={power["combat"] !== 'null' ? power["combat"] : 0}
            text={`${power["combat"] !== 'null' ? power["combat"] + "%" : "0"}`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "maroon",
              trailColor: "white",
            })}
          />
          <span className="Strength">combat</span>
        </div>
        <OtherConnectionComp connections={connection}/>
      </div>

    </>
  );
}
export default PowerStatsComponent;
