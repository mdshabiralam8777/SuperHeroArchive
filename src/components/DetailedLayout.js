import "./DetailedLayout.css";
import PowerStatsComponent from "./PowerStatsComponent.js";

function DetailedLayout({ superhero }) {
  console.log("Super Hero", superhero);
  return (
    <>
      <div className="hero-details container">
        <div className="row">
          <p className=" text-center char-name">{superhero.name}</p>
          <div className="char-image col-md-4">
            <img
              className="img-fluid"
              src={superhero?.image?.url}
              alt={superhero.name}
            />
          </div>
          <div className="char-details col-md-5">
            <div className="char-bio top-heading mb-3">BIOGRAPHY</div>
            {superhero.biography["full-name"] !== "" && (
              <div className="char-details">
                <span className="Bio-heading">
                  Full Name :{" "}
                </span>
                <span className="chat-about">
                  {superhero.biography["full-name"]}
                </span>
              </div>
            )}
            {superhero.biography["full-name"] === "" && (
              <div className="char-details">
                <span className="Bio-heading">
                  Full Name :{" "}
                </span>
                <span className="chat-about">{superhero.name}</span>
              </div>
            )}
            {superhero.biography["place-of-birth"] !== "-" && (
              <div className="char-details">
                <span className="Bio-heading">Date Of Birth : </span>
                <span className="chat-about">
                  {superhero.biography["place-of-birth"]}
                </span>
              </div>
            )}
            {superhero.biography["place-of-birth"] === "-" && (
              <div className="char-details">
                <span className="Bio-heading">Date Of Birth : </span>
                <span className="chat-about">Unknown</span>
              </div>
            )}
            {superhero.biography["first-appearance"] !== "-" && (
              <div className="char-details">
                <span className="Bio-heading">First Appearance : </span>
                <span className="chat-about">
                  {superhero.biography["first-appearance"]}
                </span>
              </div>
            )}
            {superhero.biography["first-appearance"] === "-" && (
              <div className="char-details">
                <span className="Bio-heading">First Appearance : </span>
                <span className="chat-about">Unknown</span>
              </div>
            )}
            {superhero.biography["alignment"] && (
              <div className="char-details">
                <span className="Bio-heading">Character Alignment : </span>
                <span className="chat-about">
                  {superhero.biography["alignment"]}
                </span>
              </div>
            )}
            {superhero.biography["alignment"] !== "good" &&
              superhero.biography["alignment"] !== "bad" && (
                <div className="char-details">
                  <span className="Bio-heading">Character Alignment : </span>
                  <span className="chat-about">Unknown</span>
                </div>
              )}
            {superhero.biography["publisher"] !== "" && (
              <div className="char-details">
                <span className="Bio-heading">Publisher : </span>
                <span className="chat-about">
                  {superhero.biography["publisher"]}
                </span>
              </div>
            )}
            {superhero.biography["publisher"] === "" && (
              <div className="char-details">
                <span className="Bio-heading">Publisher : </span>
                <span className="chat-about">Unknown</span>
              </div>
            )}
          </div>
          <div className="char-details col-md-3">
            <div className="char-bio top-heading mb-3">APPEARANCE</div>
            <div className="char-details">
              <span className="Bio-heading">Gender : </span>
              <span className="chat-about">
                {superhero.appearance["gender"]}
              </span>
            </div>
            <div className="char-details">
              <span className="Bio-heading">Race : </span>
              <span className="chat-about">{superhero.appearance["race"]}</span>
            </div>
            <div className="char-details">
              <span className="Bio-heading">Height : </span>
              <span className="chat-about">
                {superhero.appearance["height"][1]}
              </span>
            </div>
            <div className="char-details">
              <span className="Bio-heading">Weight : </span>
              <span className="chat-about">
                {superhero.appearance["weight"][1]}
              </span>
            </div>
            <div className="char-details">
              <span className="Bio-heading">Hair Color : </span>
              <span className="chat-about">
                {superhero.appearance["hair-color"]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
      <hr/>

      <PowerStatsComponent power={superhero["powerstats"]} connection={superhero["connections"]["group-affiliation"]}  />
      </div>
    </>
  );
}
export default DetailedLayout;
