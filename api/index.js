import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api'

export const portfolioAPI = {
  async getEducation() {
    const response = await axios.get(`${API_BASE_URL}/education`)
    return response.data
  },
  
  async getSkills() {
    const response = await axios.get(`${API_BASE_URL}/skills`)
    return response.data
  },
  
  async getProjects() {
    const response = await axios.get(`${API_BASE_URL}/projects`)
    return response.data
  }
}