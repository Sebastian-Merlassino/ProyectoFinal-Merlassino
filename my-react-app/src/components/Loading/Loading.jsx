import "./loading.css";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <FadeLoader color="#448ff2" />
    </div>
  );
};

export default Loading;
