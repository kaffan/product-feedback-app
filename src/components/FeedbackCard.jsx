import { Card } from "../common/CommonStyles";

const FeedbackCard = () => {
  return (
    <Card
      style={{
        background: "linear-gradient(to right, #28A7ED 0, #A337F6, #E84D70)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "45%",
        }}
      >
        <h4 style={{ padding: "4px 0", margin: "0" }}>Frontend Mentor</h4>
        <h5 style={{ padding: "4px 0", margin: "0" }}>Feedback Board</h5>
      </div>
    </Card>
  );
};

export default FeedbackCard;
