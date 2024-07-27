import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate("/app/cities");
      }}
    >
      <strong> {"<-"} Back</strong>
    </Button>
  );
}

export default ButtonBack;
