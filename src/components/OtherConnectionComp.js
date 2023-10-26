import "./OtherConnectionComp.css";

function OtherConnectionComp({ connections }) {
  const connectionsList = connections.split(",");
  return (
    <>
      <div className="h2 text-center mt-3 mb-1"> OTHER CONNECTIONS</div>
      <div className="container d-flex mb-5">
        {connectionsList.length > 0 &&
          connectionsList.map((connection, index) => (
            <div className="connection-list" key={index}>{connection}</div>
          ))}
      </div>
    </>
  );
}

export default OtherConnectionComp;
