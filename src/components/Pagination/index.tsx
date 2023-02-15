import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { Button } from "antd";

interface paginationProps {
  prevCursor: string;
  nextCursor: string;
  onPrevClick: any;
  onNextClick: any;
  currentPage: number | null;
}

const Pagination = (props: paginationProps) => {
  return (
    <div className="pagination d-flex align-items-center">
      <Button
        style={{ width: "fit-content", height: "fit-content", padding: 0 }}
        className="btn-arrow"
        type="text"
        onClick={props.onPrevClick}
        disabled={!props.prevCursor}
      >
        <Icon path={mdiChevronLeft} size={2} />
      </Button>
      {props.currentPage ? props.currentPage : null}
      <Button
        style={{ width: "fit-content", height: "fit-content", padding: 0 }}
        type="text"
        disabled={!props.nextCursor}
      >
        <Icon path={mdiChevronRight} size={2} />
      </Button>
    </div>
  );
};

export default Pagination;


