import sublinks from "./data";
import { useGlobalContext } from "./Context";
import { useRef } from "react";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  function handleMouseEvent(event) {
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (
      clientX < result.left - 1 ||
      clientX > result.right - 1 ||
      clientY > result.bottom - 1
    ) {
      setPageId(null);
    }
  }

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseEvent}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page} </h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
