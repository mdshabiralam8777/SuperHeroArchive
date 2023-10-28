import "./OtherConnectionComp.css";

function OtherConnectionComp({ connections }) {
  const connectionsList = connections.split(",");
  return (
    <>
      <div className="text-center mt-3 mb-1 other-connection"> OTHER CONNECTIONS</div>
      <div className="container d-flex mb-5">
        {connectionsList.length > 0 &&
          connectionsList.map((connection, index) => (
            <div className="connection-list text-center" key={index}>{connection}</div>
          ))}
      </div>
    </>
  );
}

export default OtherConnectionComp;
