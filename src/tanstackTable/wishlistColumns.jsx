import { createColumnHelper } from "@tanstack/react-table";
import DeleteBtn from "../components/DeleteBtn";
import DetailsBtn from "../components/DetailsBtn";

const columnHelper = createColumnHelper();
const wishlistColumns = [
  columnHelper.accessor("index", {
    header: () => "Index",
    cell: (props) => {
      console.log("mydata", props);
      return Number(props.row.id) + 1;
    },
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
    header: "Title",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (props) => `$${props.renderValue()}`,
  }),
  columnHelper.accessor("_id", {
    header: "Actions",
    cell: (props) => (
      <div className="my-1 flex items-center justify-center gap-2">
        <DetailsBtn blogId={props.getValue()} />
        <DeleteBtn blogId={props.getValue()} />
      </div>
    ),
  }),
];

export default wishlistColumns;
