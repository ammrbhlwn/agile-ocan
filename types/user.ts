export type Dosen = {
  id_dosen: string;
  nama: string;
  nip: string;
  departemen: string;
};

export type Mahasiswa = {
  id_mahasiswa: string;
  nrp: string;
  nama: string;
  departemen: string;
};

export type Admin = {
  id_admin: string;
  nama: string;
};

export type UserResponse = {
  dosen?: Dosen;
  mahasiswa?: Mahasiswa;
  admin?: Admin;
};

export type WithToken = {
  token: string;
};