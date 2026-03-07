import axios from 'axios';

// Base URL untuk API Laravel
const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token interceptor for admin routes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ==================== PUBLIC API ====================

// Berita
export const getBeritaList = (params = {}) => api.get('/public/berita', { params });
export const getBeritaBySlug = (slug) => api.get(`/public/berita/${slug}`);

// Galeri
export const getGaleriList = (params = {}) => api.get('/public/galeri', { params });
export const getGaleriById = (id) => api.get(`/public/galeri/${id}`);

// Guru
export const getGuruList = (params = {}) => api.get('/public/guru', { params });
export const getGuruById = (id) => api.get(`/public/guru/${id}`);

// Prestasi
export const getPrestasiList = (params = {}) => api.get('/public/prestasi', { params });
export const getPrestasiById = (id) => api.get(`/public/prestasi/${id}`);

// Ekstrakurikuler
export const getEkstrakurikulerList = (params = {}) => api.get('/public/ekstrakurikuler', { params });
export const getEkstrakurikulerBySlug = (slug) => api.get(`/public/ekstrakurikuler/${slug}`);

// Courses
export const getCourseList = (params = {}) => api.get('/public/courses', { params });
export const getCourseById = (id) => api.get(`/public/courses/${id}`);

// ==================== ADMIN API ====================

// Admin Berita
export const getAdminBerita = (params = {}) => api.get('/admin/berita', { params });
export const createBerita = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/berita', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateBerita = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/berita/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteBerita = (id) => api.delete(`/admin/berita/${id}`);

// Admin Galeri
export const getAdminGaleri = (params = {}) => api.get('/admin/galeri', { params });
export const createGaleri = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/galeri', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateGaleri = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/galeri/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteGaleri = (id) => api.delete(`/admin/galeri/${id}`);

// Admin Guru
export const getAdminGuru = (params = {}) => api.get('/admin/guru', { params });
export const createGuru = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/guru', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateGuru = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/guru/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteGuru = (id) => api.delete(`/admin/guru/${id}`);

// Admin Prestasi
export const getAdminPrestasi = (params = {}) => api.get('/admin/prestasi', { params });
export const createPrestasi = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/prestasi', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updatePrestasi = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/prestasi/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deletePrestasi = (id) => api.delete(`/admin/prestasi/${id}`);

// Admin Ekstrakurikuler
export const getAdminEkstrakurikuler = (params = {}) => api.get('/admin/ekstrakurikuler', { params });
export const createEkstrakurikuler = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/ekstrakurikuler', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateEkstrakurikuler = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/ekstrakurikuler/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteEkstrakurikuler = (id) => api.delete(`/admin/ekstrakurikuler/${id}`);

// Admin Courses
export const getAdminCourses = (params = {}) => api.get('/admin/courses', { params });
export const createCourse = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/courses', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateCourse = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/courses/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteCourse = (id) => api.delete(`/admin/courses/${id}`);

// Admin Sambutan
export const getAdminSambutan = (params = {}) => api.get('/admin/sambutan', { params });
export const createSambutan = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post('/admin/sambutan', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const updateSambutan = (id, data) => {
  const formData = new FormData();
  formData.append('_method', 'PUT');
  Object.keys(data).forEach(key => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return api.post(`/admin/sambutan/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deleteSambutan = (id) => api.delete(`/admin/sambutan/${id}`);

// Public Sambutan
export const getSambutan = () => api.get('/public/sambutan');

// Tentang (About)
export const getTentang = () => api.get('/public/tentang');

// Admin Tentang
export const getAdminTentang = () => api.get('/admin/tentang');
export const updateTentang = (data) => {
  return api.put('/admin/tentang', data);
};

// Helper function untuk mendapatkan URL gambar
export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `http://localhost:8000/storage/${path}`;
};

export default api;
