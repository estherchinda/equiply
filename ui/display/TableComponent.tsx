'use client';

import { useState } from 'react';

type TableRow = {
  equipment: string;
  date: string;
  duration: string;
  status: string;
};

type TableProps = {
  headers: string[];
  rows: TableRow[];
  rowsPerPage?: number
};

export default function Table({ headers, rows, rowsPerPage = 10 }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const paginatedRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full border border-[#366347] rounded-[12px] bg-[#122117] overflow-x-auto">
      <table className="w-full md:min-w-[600px]">
        <thead className='bg-[#1C3324]'>
          <tr className="text-left text-white text-xs md:text-sm border-b border-[#366347]">
            {headers.map((header, idx) => (
              <th key={idx} className="py-4 px-4 font-medium whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row, idx) => (
            <tr key={idx} className="border-b border-[#366347] text-xs md:text-sm text-white">
              <td className="py-4 px-4 whitespace-nowrap">{row.equipment}</td>
              <td className="py-4 px-4 text-[#94C7A8] whitespace-nowrap">{row.date}</td>
              <td className="py-4 px-4 text-[#94C7A8] whitespace-nowrap">{row.duration}</td>
              <td className="py-4 px-4">
                <span className={`${row.status === "Completed" ? "bg-[#1F3529] text-[#94C7A8]" : "bg-[#524d28] text-white"} px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      {rows.length > rowsPerPage || rowsPerPage > 2 && (
        <div className="flex justify-center items-center gap-4 py-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-sm text-[#94C7A8] disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-sm text-[#94C7A8] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
