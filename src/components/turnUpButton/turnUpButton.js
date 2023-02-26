import "./turnUpButton.css";
import { FaLevelUpAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showButton, hideButton } from "./reduxToolKit/slice";

function TurnUpButtton() {
  const show = useSelector((state) => state.showing.value);
  const dispatch = useDispatch();
  const handleScroll = () => {
    if (window.scrollY >= 400) dispatch(showButton());
    else dispatch(hideButton());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      {show && (
        <button className="turnUpButton" onClick={() => window.scrollTo(0, 0)}>
          <FaLevelUpAlt className="turnUpIcon" />
        </button>
      )}
    </div>
  );
}

export default TurnUpButtton;
