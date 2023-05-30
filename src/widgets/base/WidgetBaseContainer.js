import WidgetBaseHeader from "./WidgetBaseHeader";
import WidgetBaseSidebar from "./WidgetBaseSidebar";

const WidgetBaseContainer = ({ children }) => {
  return (
    <>
      <WidgetBaseHeader />
      <div className="container-fluid">
        <div className="row">
          <WidgetBaseSidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
            <div className="d-grid gap-3"> {children} </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default WidgetBaseContainer;
