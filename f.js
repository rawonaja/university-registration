function validateForm() {
  let nomor = document.getElementById("nomor").value;
  let nama = document.getElementById("nama").value;
  let nisn = document.getElementById("nisn").value;
  let sekolah = document.getElementById("sekolah").value;
  let gender = document.getElementById("gender").value;
  let fakultas = document.getElementById("fakultas").value;
  let prodi = document.getElementById("prodi").value;
  let namaAyah = document.getElementById("namaAyah").value;
  let pekerjaanAyah = document.getElementById("pekerjaanAyah").value;
  let namaIbu = document.getElementById("namaIbu").value;
  let pekerjaanIbu = document.getElementById("pekerjaanIbu").value;

  if (!nomor || !nama || !nisn || !sekolah || !gender || !fakultas || !prodi || !namaAyah || !pekerjaanAyah || !namaIbu || !pekerjaanIbu) {
    alert("Harap isi semua kolom yang diperlukan!");
    return false;
  }
  return true;
}

function updateProdi() {
  let fakultas = document.getElementById("fakultas").value;
  let prodiSelect = document.getElementById("prodi");
  prodiSelect.innerHTML = "";

  let prodiOptions = {
    Teknik: ["Teknik Elektro", "Teknik Mesin", "Teknik Sipil"],
    Ekonomi: ["Akuntansi", "Manajemen", "Ekonomi Pembangunan"],
  };

  if (prodiOptions[fakultas]) {
    prodiOptions[fakultas].forEach((prodi) => {
      let option = document.createElement("option");
      option.value = prodi;
      option.textContent = prodi;
      prodiSelect.appendChild(option);
    });
  }
}

function previewData() {
  if (!validateForm()) return;

  let content = `
        <p><strong>Nomor Pendaftaran:</strong> ${document.getElementById("nomor").value}</p>
        <p><strong>Nama:</strong> ${document.getElementById("nama").value}</p>
        <p><strong>NISN:</strong> ${document.getElementById("nisn").value}</p>
        <p><strong>Asal Sekolah:</strong> ${document.getElementById("sekolah").value}</p>
        <p><strong>Jenis Kelamin:</strong> ${document.getElementById("gender").value}</p>
        <p><strong>Fakultas:</strong> ${document.getElementById("fakultas").value}</p>
        <p><strong>Program Studi:</strong> ${document.getElementById("prodi").value}</p>
        <p><strong>Nama Ayah:</strong> ${document.getElementById("namaAyah").value}</p>
        <p><strong>Pekerjaan Ayah:</strong> ${document.getElementById("pekerjaanAyah").value}</p>
        <p><strong>Nama Ibu:</strong> ${document.getElementById("namaIbu").value}</p>
        <p><strong>Pekerjaan Ibu:</strong> ${document.getElementById("pekerjaanIbu").value}</p>
    `;
  document.getElementById("preview-content").innerHTML = content;
  document.getElementById("preview-modal").style.display = "flex";
}

function closePreview() {
  document.getElementById("preview-modal").style.display = "none";
}

function submitForm() {
  alert("Formulir berhasil dikirim!");
  document.getElementById("registrationForm").submit();
}
