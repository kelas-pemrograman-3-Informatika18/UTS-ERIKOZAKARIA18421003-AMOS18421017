<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Universitas Bandar Lampung
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-red-8"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'welcome'}">
        <q-item-section avatar>
            <q-icon name="dashboard" />
        </q-item-section>

        <q-item-section>
          Selamat Datang
        </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'inputJadwal'}">
        <q-item-section avatar>
            <q-icon name="input" />
        </q-item-section>

        <q-item-section>
          Daftar Kuliah
        </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'About'}">
        <q-item-section avatar>
            <q-icon name="star" />
        </q-item-section>

        <q-item-section>
          About
        </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'Keluar'}">
        <q-item-section avatar>
            <q-icon name="warning" />
        </q-item-section>

        <q-item-section>
          Logout
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
