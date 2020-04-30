<template>
    <q-page padding>
        <q-card flat>
            <q-card-section class="q-gutter-md">
            <div class="text-h5">Daftar Kuliah</div>
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-mt-lt"
          >
          <div class="q-gutter-md">
              <q-input label="Nama Lengkap" v-model="namalengkap" filled :rules="[ val => val && val.length > 0 || 'Masukan Nama Lengkap']"></q-input>
              <q-input label="Alamat" v-model="alamat" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Judul Kegiatan']"></q-input>
              <q-input label="No Telepon" v-model="notelp" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Keterangan']"></q-input>
              <q-input label="Fakultas" v-model="fakultas" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Keterangan']"></q-input>
              <q-input label="Prodi" v-model="prodi" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Keterangan']"></q-input>
              <q-btn type="submit" label="Daftar" color="teal" unelevated></q-btn>
              <q-btn type="reset" label="Reset" color="teal" flat unelevated></q-btn>
          </div>
            </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      namalengkap: null,
      alamat: null,
      notelp: null,
      fakultas: null,
      prodi: null
    }
  },
  methods: {
    onReset () {
      this.namalengkap = null
      this.alamat = null
      this.notelp = null
      this.fakultas = null
      this.prodi = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Daftar'
      })
      this.$router.push({ name: 'welcome' })
    }
  }
}
</script>
