import express from 'express'
import serverless from 'serverless-http'
import cors from 'cors'

const app = express()
app.use(cors()) // ← tambahkan ini supaya frontend bisa akses backend

app.get('/education', (req, res) => {
  res.status(200).json([
    { id: 1, school: 'Universitas Amikom', year: '2025' },
    { id: 2, school: 'SMA N 1 Contoh', year: '2021' }
  ])
})

app.get('/skills', (req, res) => {
  res.status(200).json([
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
  ])
})

app.get('/projects', (req, res) => {
  res.status(200).json([
    { id: 1, title: 'Final Project Pemrograman Web' },
    { id: 2, title: 'Final Project AMCC' }
  ])
})

export default serverless(app)
