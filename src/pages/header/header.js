import "./header.css";
import { SigninContext } from "../Context/signinContext";
import { useContext } from "react";
import CollapsibleExample from "../../components/header/navBar";

export default function Header() {
  const context = useContext(SigninContext);

  return (
    <div className="header">
      <CollapsibleExample
        signinStatus={context.signinStatus}
        headerName={context.headerName}
      />
    </div>
  );
}
