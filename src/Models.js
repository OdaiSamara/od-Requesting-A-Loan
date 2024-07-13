import "./styleForm.css";
export default function Models({ isvisbelty, errormessage = null }) {
  if (isvisbelty) {
    return (
      <div className="od-bgColor">
        <div className="od-position">
          <h1 style={{ color: errormessage != null ? "red" : "green" }}>
            {errormessage != null
              ? errormessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  }
}
