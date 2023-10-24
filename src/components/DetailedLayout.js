import "./DetailedLayout.css";

function DetailedLayout({ superhero }) {
  console.log("Super Hero", superhero);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="char-image col-md-4">
            <img
              className="img-fluid"
              src={superhero?.image?.url}
              alt={superhero.name}
            />
          </div>
          <div className="char-details mx-5 col-md-5">
            <p className="char-name">{superhero.name}</p>
            <div className="char-bio mb-3">BIOGRAPHY</div>
            {superhero.biography["full-name"] !== "" && (
            <div className="char-details">
              <span className="Bio-heading">Full Name / Unmasked Name : </span>
              {superhero.biography["full-name"]}
            </div>
            )}
            {superhero.biography["full-name"] === "" && (
            <div className="char-details">
              <span className="Bio-heading">Full Name / Unmasked Name : </span>
              {superhero.name}
            </div>
            )}
            {superhero.biography["place-of-birth"] !== "-" && (
              <div className="char-details">
                <span className="Bio-heading">Date Of Birth : </span>
                {superhero.biography["place-of-birth"]}
              </div>
            )}
            {superhero.biography["place-of-birth"] === "-" && (
              <div className="char-details">
              <span className="Bio-heading">Date Of Birth : </span>
              Unknown
            </div>
            )}
            {superhero.biography["first-appearance"] !== "-" && (
              <div className="char-details">
                <span className="Bio-heading">First Appearance : </span>
                {superhero.biography["first-appearance"]}
              </div>
            )}
            {superhero.biography["first-appearance"] === "-" && (
              <div className="char-details">
              <span className="Bio-heading">First Appearance : </span>
              Unknown
            </div>
            )}
            {superhero.biography["alignment"] && (
              <div className="char-details">
                <span className="Bio-heading">Character Alignment : </span>
                {superhero.biography["alignment"]}
              </div>
            )}
            {(superhero.biography["alignment"] !=='good' &&  superhero.biography["alignment"] !=='bad') && (
              <div className="char-details">
              <span className="Bio-heading">Character Alignment : </span>
              Unknown
            </div>
            )}
            {superhero.biography["publisher"] !== "" && (
              <div className="char-details">
                <span className="Bio-heading">Publisher : </span>
                {superhero.biography["publisher"]}
              </div>
            )}
            {superhero.biography["publisher"] === "" && (
              <div className="char-details">
              <span className="Bio-heading">Publisher : </span>
              Unknown
            </div>
            )}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
export default DetailedLayout;
