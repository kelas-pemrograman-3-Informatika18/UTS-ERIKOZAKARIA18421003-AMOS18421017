<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax>
      <h3 class="text-black">Selamat Datang Di Webseite Universitas Bandar Lampung</h3>
      <h3 class="text-black">Berikut Daftar Jurusan dan Prodi Yang Tersedia</h3>
    </q-parallax>

    </div>
  </div>

    <q-table
      title="Daftar Jurusan"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="fakultas" :props="props">
            {{ props.row.fakultas }}
          </q-td>
          <q-td key="prodi" :props="props">
            {{ props.row.prodi }}
          </q-td>
          <q-td key="nilai" :props="props">
            {{ props.row.nilai }}
          </q-td>
          <q-td key="jenis" :props="props">
            {{ props.row.jenis }}
          </q-td>
          <q-td key="tutup" :props="props">
            {{ props.row.tutup }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'fakultas',
          required: true,
          label: 'Fakultas',
          align: 'left',
          field: 'fakultas',
          sortable: true
        },
        { name: 'prodi', align: 'center', label: 'Prodi', field: 'prodi', sortable: true },
        { name: 'nilai', align: 'center', label: 'Akreditasi', field: 'nilai', sortable: true },
        { name: 'jenis', align: 'center', label: 'Jenis Pendaftaran', field: 'jenis', sortable: true },
        { name: 'tutup', align: 'center', label: 'Penutupan Pendaftaran', field: 'tutup', sortable: true }
      ],
      data: [
        {
          fakultas: 'Fakultas Ilmu Komputer',
          prodi: 'Informatika',
          nilai: 'Baik',
          jenis: 'Online',
          tutup: '11 Juni 2020'
        },
        {
          fakultas: 'Fakultas Ilmu Komputer',
          prodi: 'Sistem Informasi',
          nilai: 'Baik',
          jenis: 'Online',
          tutup: '12 Juni 2020'
        },
        {
          fakultas: 'Fakultas Teknik',
          prodi: 'Teknik Mesin',
          nilai: 'Cukup',
          jenis: 'Online',
          tutup: '13 Juni 2020'
        },
        {
          fakultas: 'Fakultas Ekonomi Bisnis',
          prodi: 'Akuntansi',
          nilai: 'Sangat Baik',
          jenis: 'Online',
          tutup: '14 Juni 2020'
        },
        {
          fakultas: 'Fakultas Ekonomi Bisnis',
          prodi: 'Manajemen',
          nilai: 'Sangat Baik',
          jenis: 'Online',
          tutup: '15 Juni 2020'
        }
      ]
    }
  }
}
</script>
