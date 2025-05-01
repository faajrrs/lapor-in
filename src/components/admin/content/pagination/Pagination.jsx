import Page from "./Page";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  return (
    <div
      className="pagination"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <PaginationButton ariaLabel="Previous page" icon="&lt;" />
      <Page value="1" />
      <Page value="2" />
      <Page value="3" />
      <Page value="4" />
      <Page value="5" />
      <PaginationButton ariaLabel="Next page" icon="&gt;" />
    </div>
  );
}
