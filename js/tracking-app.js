const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      searchDO: "",
      searchDOKey: "",
      searchResult: null,
      trackingList:
        typeof dataTracking !== "undefined"
          ? dataTracking
          : typeof dataBahanAjar !== "undefined"
            ? dataBahanAjar.tracking
            : {},
    };
  },
  methods: {
    submitDO() {
      const query = this.searchDO.trim();

      if (!query) {
        Swal.fire({
          icon: "warning",
          title: "Peringatan",
          text: "Silakan masukkan Nomor DO terlebih dahulu!",
          confirmButtonColor: "#f39c12",
        });
        this.searchResult = null;
        return;
      }

      // Cari data di dalam trackingList
      if (this.trackingList && this.trackingList[query]) {
        this.searchResult = this.trackingList[query];
        this.searchDOKey = query;
      } else {
        this.searchResult = null;
        Swal.fire({
          icon: "error",
          title: "Tidak Ditemukan",
          text: `Data dengan Nomor DO "${query}" tidak ditemukan!`,
          confirmButtonColor: "#d33",
        });
      }
    },
  },
});

app.mount("#trackingApp");
