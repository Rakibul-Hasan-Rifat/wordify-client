import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const featureBlogColumns = [
  columnHelper.accessor("index", {
    header: "Index",
    cell: (props) => parseInt(props.row.id) + 1,
  }),
  columnHelper.accessor("url", {
    header: "Image",
    cell: (props) => (
      <div className="w-full p-1 flex items-center justify-center">
        <img
          src={props.getValue()}
          className="w-10 h-10 object-cover rounded"
        />
      </div>
    ),
  }),
  columnHelper.accessor("title", {
    header: "Blog Title",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (props) => `$ ${props.getValue()}`,
  }),
  columnHelper.accessor("prep_time", {
    header: "Time for prep",
    cell: (props) => props.getValue(),
  }),
];

export default featureBlogColumns;
