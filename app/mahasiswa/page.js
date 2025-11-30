'use client';
import useGetAllStudent from "@/hooks/mahasiswa/useGetAllStudent";
import Link from "next/link";

export default function MahasiswaPage() {
  const { data: studentData, isLoading: loadingStudent } = useGetAllStudent({
        page,
        pageSize: 10,
        enabled: user?.role === "admin",
    });

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Selamat Datang, Mahasiswa Teknik Informatika ITS 👩‍🎓
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Anda berhasil login sebagai mahasiswa.
      </p>

      <Link href="/signin" className="text-sm text-blue-600 hover:underline">
        Keluar
      </Link>
    </div>
  );
}
