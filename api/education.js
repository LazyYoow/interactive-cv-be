export default function handler(req, res) {
  res.status(200).json([
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMK Yadika Tanjungsari', major: 'Teknik Komputer dan Jaringan' },
    { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Contoh', major: '-' }
  ])
}
