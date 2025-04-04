import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import featureBlogColumns from "../tanstackTable/featureBlogColumns";

const FeaturedBlogsPage = () => {
  const [featureBlogs, setFeatureBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/feature-blogs`
      );
      const result = await response.json();
      console.log('feature data', result);
      setFeatureBlogs(result)
    })();
  }, []);

  const table = useReactTable({
    columns: featureBlogColumns,
    data: featureBlogs,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="w-full table-auto border border-collapse border-gray-400">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="border border-gray-400 px-2 py-1"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-center px-2 py-1 text-xl">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogsPage;
