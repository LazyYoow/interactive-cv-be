// api/index.js

import express from 'express'
import serverless from 'serverless-http'

const app = express()

// Endpoint /api/education
app.get('/api/education', (req, res) => {
  res.status(200).json([
    { id: 1, school: 'Universitas Amikom', year: '2025' },
    { id: 2, school: 'SMA N 1 Contoh', year: '2021' }
  ])
})

// Endpoint /api/skills
app.get('/api/skills', (req, res) => {
  res.status(200).json([
    { id: 1, skill: 'JavaScript' },
    { id: 2, skill: 'Vue.js' },
    { id: 3, skill: 'Tailwind CSS' }
  ])
})

// Endpoint /api/projects
app.get('/api/projects', (req, res) => {
  res.status(200).json([
    { id: 1, title: 'Final Project Pemrograman Web' },
    { id: 2, title: 'Final Project AMCC' }
  ])
})

// WAJIB: export handler
export const handler = serverless(app)
