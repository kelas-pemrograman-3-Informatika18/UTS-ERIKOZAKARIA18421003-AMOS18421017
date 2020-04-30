<template>
  <q-page class="light-green-13">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 pink-2" flat>
        <q-card-section>
          <div class="text-h6 q-pb-md">
            Isi Data di bawah ini
          </div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="username"
              label="Username Anda"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Username']"
            />

            <q-input
              filled
              v-model="namalengkap"
              label="Nama Lengkap Anda"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Nama Lengkap']"
            />

            <q-input
              filled
              v-model="email"
              label="Email Anda"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Email Anda']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Password Anda"
              lazy-rules
              :rules="[
                val => val !== null && val.length > 0 || 'Password Tidak Boleh Kosong'
              ]"
            />
            <div class="q-gutter-md">
              <q-btn label="Login" to="/login" color="green-9" />
              <q-btn label="Create Account" type="submit" color="blue-7" />
              <q-btn label="Reset" type="reset" color="deep-purple-12" flat class="q-ml-sm" />
            </div>
        </q-form>
        </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null,
      namalengkap: null,
      email: null
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Daftar'
      })
      this.$router.push('/login')
    },
    onReset () {
      this.username = null
      this.password = null
      this.email = null
      this.namalengkap = null
    }
  }
}
</script>
