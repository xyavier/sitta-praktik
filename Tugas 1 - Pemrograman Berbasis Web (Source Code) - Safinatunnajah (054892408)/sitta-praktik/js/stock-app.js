const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      stok: dataBahanAjar.stok || [],
    };
  },
  computed: {
    filteredData() {
      return this.stok;
    },
  },
  methods: {
    // SHOW DETAIL ITEM
    showDetail(item) {
      Swal.fire({
        title: `Detail Bahan Ajar`,
        width: 450,
        html: `
        <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${item.sampul || "img/default.jpg"}" alt="${item.judul}" 
                            style="width: 140px; height: 190px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                    </div>
                    
                    <div style="border-radius: 10px; padding: 15px; text-align: left; font-size: 14px; box-shadow: inset 0 0 5px rgba(0,0,0,0.03);">
                        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                            <span style="font-weight: 600; width: 110px; color: #555; flex-shrink: 0;">Kode Barang</span>
                            <span style="margin-right: 10px; color: #555;">:</span>
                            <span style="color: #222; line-height: 1.4; text-align: left;">${item.kode}</span>
                        </div>
                        
                        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                            <span style="font-weight: 600; width: 110px; color: #555; flex-shrink: 0;">Judul</span>
                            <span style="margin-right: 10px; color: #555;">:</span>
                            <span style="color: #222; line-height: 1.4; text-align: left;">${item.judul}</span>
                        </div>
                        
                        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                            <span style="font-weight: 600; width: 110px; color: #555; flex-shrink: 0;">Edisi</span>
                            <span style="margin-right: 10px; color: #555;">:</span>
                            <span style="color: #333; text-align: left;">Edisi ${item.edisi || 1}</span>
                        </div>
                        
                        <div style="display: flex; align-items: flex-start;">
                            <span style="font-weight: 600; width: 110px; color: #555; flex-shrink: 0;">Jumlah Stok</span>
                            <span style="margin-right: 10px; color: #555;">:</span>
                            <span style="color: #222; line-height: 1.4; text-align: left;">${item.qty} unit</span>
                        </div>
                    </div>
                `,
        confirmButtonText: "Tutup",
        confirmButtonColor: "#3085d6",
      });
    },

    // ADD ITEM
    async openAddModal() {
      const { value: formValues } = await Swal.fire({
        title: "Tambah Bahan Ajar",
        width: 550,
        html: `
                    <input id="kode" class="swal2-input" placeholder="Kode Barang">
                    <input id="judul" class="swal2-input" placeholder="Judul Bahan Ajar">
                    <input id="edisi" class="swal2-input" type="number" placeholder="Edisi">
                    <input id="qty" class="swal2-input" type="number" placeholder="Jumlah Stok">
                    
                    <div style="text-align: left; margin: 15px 35px 5px 35px;">
                        <label style="font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 5px;">Upload Sampul / Cover:</label>
                        <input id="sampulFile" type="file" accept="image/*" class="swal2-file" style="margin: 0; width: 100%;">
                    </div>
                `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batal",
        preConfirm: () => {
          const fileInput = document.getElementById("sampulFile");
          const file = fileInput ? fileInput.files[0] : null;

          return new Promise((resolve) => {
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                resolve({
                  kode: document.getElementById("kode").value.trim(),
                  judul: document.getElementById("judul").value.trim(),
                  edisi: Number(document.getElementById("edisi").value) || 1,
                  qty: Number(document.getElementById("qty").value) || 0,
                  sampul: e.target.result,
                });
              };
              reader.readAsDataURL(file);
            } else {
              resolve({
                kode: document.getElementById("kode").value.trim(),
                judul: document.getElementById("judul").value.trim(),
                edisi: Number(document.getElementById("edisi").value) || 1,
                qty: Number(document.getElementById("qty").value) || 0,
                sampul: "img/default.jpg",
              });
            }
          });
        },
      });

      if (formValues) {
        if (!formValues.kode || !formValues.judul) {
          Swal.fire("Gagal", "Kode dan Judul wajib diisi!", "error");
          return;
        }

        if (this.stok.some((i) => i.kode === formValues.kode)) {
          Swal.fire("Gagal", "Kode sudah terdaftar!", "error");
          return;
        }

        this.stok.push(formValues);
        Swal.fire(
          "Berhasil",
          "Data bahan ajar berhasil ditambahkan!",
          "success",
        );
      }
    },

    // EDIT ITEM
    async editItem(item) {
      const { value: formValues } = await Swal.fire({
        title: "Edit Data Bahan Ajar",
        width: 550,
        html: `
                    <input id="kode" class="swal2-input" value="${item.kode}" disabled style="background-color: #f0f0f0;">
                    <input id="judul" class="swal2-input" value="${item.judul || ""}" placeholder="Judul">
                    <input id="edisi" class="swal2-input" type="number" value="${item.edisi || 1}" placeholder="Edisi">
                    <input id="qty" class="swal2-input" type="number" value="${item.qty || 0}" placeholder="Jumlah Stok">
                    
                    <div style="text-align: left; margin: 15px 35px 5px 35px;">
                        <label style="font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 5px;">Ganti Sampul (Opsional):</label>
                        <input id="sampulFile" type="file" accept="image/*" class="swal2-file" style="margin: 0; width: 100%;">
                    </div>
                `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Simpan Perubahan",
        cancelButtonText: "Batal",
        preConfirm: () => {
          const fileInput = document.getElementById("sampulFile");
          const file = fileInput ? fileInput.files[0] : null;

          return new Promise((resolve) => {
            const updatedData = {
              judul: document.getElementById("judul").value.trim(),
              edisi: Number(document.getElementById("edisi").value) || 1,
              qty: Number(document.getElementById("qty").value) || 0,
            };

            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                updatedData.sampul = e.target.result;
                resolve(updatedData);
              };
              reader.readAsDataURL(file);
            } else {
              updatedData.sampul = item.sampul;
              resolve(updatedData);
            }
          });
        },
      });

      if (formValues) {
        if (!formValues.judul) {
          Swal.fire("Gagal", "Judul tidak boleh kosong!", "error");
          return;
        }

        Object.assign(item, formValues);
        Swal.fire("Berhasil", "Data berhasil diperbarui!", "success");
      }
    },

    // DELETE ITEM
    deleteItem(item) {
      Swal.fire({
        title: "Yakin ingin menghapus?",
        text: `Data ${item.judul} akan dihapus!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.stok = this.stok.filter((i) => i.kode !== item.kode);
          Swal.fire("Terhapus!", "Data telah dihapus.", "success");
        }
      });
    },
  },
});

app.mount("#stockApp");
