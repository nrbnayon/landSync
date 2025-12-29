"use client";

import { useState, useEffect } from "react";
import { landParcelsData } from "@/data/landParcelsData";
import { Pagination } from "@/components/Shared/Pagination";
import TranslatedText from "@/components/Shared/TranslatedText";
import { Skeleton } from "@/components/ui/skeleton";

// Define interface for props if you want to make it reusable later
interface LandParcelsTableProps {
  itemsPerPage?: number;
}

export default function LandParcelsTable({ itemsPerPage = 10 }: LandParcelsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  // Logic for pagination
  const totalItems = landParcelsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = landParcelsData.slice(startIndex, endIndex);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate network delay
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Parcel ID" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Owner Name" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Area (m²)" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Zone" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Type" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Ownership" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold"><TranslatedText text="Registration Date" /></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              // Skeleton Loading State
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <tr key={`skeleton-${index}`}>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-6 w-24 rounded-full" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-6 w-20 rounded-full" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                </tr>
              ))
            ) : (
              // Actual Data
              currentItems.map((parcel) => (
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
                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${getTypeColor(parcel.type)}`}>
                      <TranslatedText text={parcel.type} />
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1 rounded-full text-xs font-medium ${getOwnershipColor(parcel.ownership)}`}>
                      <TranslatedText text={parcel.ownership} />
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary">
                    {parcel.registrationDate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentItemsCount={currentItems.length}
      />
    </div>
  );
}
