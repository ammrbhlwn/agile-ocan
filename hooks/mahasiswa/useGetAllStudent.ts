import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export interface useGetPaginationProps {
  page: number;
  pageSize: number;
  enabled?: boolean;
  search?: string;
}

export default function useGetAllStudent({ page, pageSize, enabled, search }: useGetPaginationProps) {
  return useQuery({
    queryKey: ["students-all", page, search],
    queryFn: async () => {
      const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
      const response = await api.get(`/mahasiswa?pagination=true&page=${page}&page_size=${pageSize}${searchParam}`)
      return response.data
    },
    enabled
  });
}
