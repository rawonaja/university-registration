<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomor = $_POST['nomor'];
    $nama = $_POST['nama'];
    $nisn = $_POST['nisn'];
    $sekolah = $_POST['sekolah'];
    $gender = $_POST['gender'];
    $fakultas = $_POST['fakultas'];
    $prodi = $_POST['prodi'];
    
    // Koneksi ke database
    $conn = new mysqli("localhost", "root", "", "pendaftaran_unp");
    
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO pendaftar (nomor, nama, nisn, sekolah, gender, fakultas, prodi) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $nomor, $nama, $nisn, $sekolah, $gender, $fakultas, $prodi);
    
    if ($stmt->execute()) {
        echo "Pendaftaran berhasil!";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
    $conn->close();
}
?>
