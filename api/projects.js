export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: 'Final Project Pemrograman Web' },
    { id: 2, title: 'Final Project AMCC' }
  ])
}
