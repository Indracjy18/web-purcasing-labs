import { ButtonGroup } from "react-bootstrap";

const WidgetBaseTitleActions = ({ title, buttonActions }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2>{title}</h2>
      <ButtonGroup>{buttonActions}</ButtonGroup>
    </div>
  );
};
export default WidgetBaseTitleActions;
