"use client";

import { useState } from "react";
import { landParcelsData } from "@/data/landParcelsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LandParcelsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 250; // Mock total for 'of 250' display as per image
  // In a real app, this would come from the API/data length
  
  // Since we only have 10 mock items, we'll just show them all for page 1
  // But functionally we set this up for pagination
  const currentItems = landParcelsData; 

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Agricultural":
        return "bg-[#F3F1FF] text-[#BB65FF]";
      case "Commercial":
        return "bg-[#DFECFF] text-[#799EFF]";
      case "Industrial":
        return "bg-[#E7E7FF] text-[#615FFF]";
      case "Residential":
        return "bg-[#DFFFEB] text-[#11B751]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getOwnershipColor = (status: string) => {
    switch (status) {
      case "Leased":
        return "bg-[#FF7782] text-white";
      case "Owned":
        return "bg-[#799EFF] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold">Parcel ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Owner Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Area (m²)</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Zone</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Ownership</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Registration Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((parcel, index) => (
              <tr 
                key={parcel.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-secondary">
                  {parcel.parcelId}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {parcel.ownerName}
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  {parcel.area.toLocaleString()} m²
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  {parcel.zone}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(parcel.type)}`}>
                    {parcel.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-medium ${getOwnershipColor(parcel.ownership)}`}>
                    {parcel.ownership}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  {parcel.registrationDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-secondary">
          Showing 1 to {currentItems.length} of {totalItems} entries
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4 text-secondary" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#4AAA4F] text-white text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-secondary text-sm hover:bg-gray-50">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-secondary text-sm hover:bg-gray-50">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-secondary text-sm hover:bg-gray-50">
            4
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-secondary text-sm hover:bg-gray-50">
            5
          </button>
          
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <ChevronRight className="w-4 h-4 text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
}
