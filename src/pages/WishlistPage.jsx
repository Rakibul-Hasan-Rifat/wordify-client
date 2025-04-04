import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import useAuth from "../hooks/useAuth";
import wishlistColumns from "../tanstackTable/wishlistColumns";

const WishlistPage = () => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const listedItems = [];
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_server_url}/wish-list/${user?.email}`
        );
        const { blogIds } = await response.json();

        blogIds.forEach(async (id) => {
          const res = await fetch(
            `${import.meta.env.VITE_server_url}/blogs/wish-list/${id}`
          );

          const wishlistData = await res.json();

          listedItems.push(wishlistData);
          setWishlistItems([...listedItems]);
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchWishlist();
  }, [user?.email]);

  const table = useReactTable({
    data: wishlistItems,
    columns: wishlistColumns,
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

export default WishlistPage;
