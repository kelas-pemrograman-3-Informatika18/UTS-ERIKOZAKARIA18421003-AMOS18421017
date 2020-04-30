<template>
    <q-page padding>
        <q-card flat>
            <q-card-section class="q-gutter-md">
            <div class="text-h5">Logout</div>
            <q-form
                @submit="onSubmit"
                class="q-mt-lt"
          >
          <div class="q-gutter-md">
            <q-btn label="Keluar" to="/login" color="red-7" />
          </div>
            </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script>
</script>
