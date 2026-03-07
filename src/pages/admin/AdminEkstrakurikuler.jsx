import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import CrudTable from '../../components/admin/CrudTable';
import CrudModal from '../../components/admin/CrudModal';
import { getAdminEkstrakurikuler, createEkstrakurikuler, updateEkstrakurikuler, deleteEkstrakurikuler } from '../../services/api';

const formFields = [
  { name: 'nama', label: 'Nama Ekstrakurikuler', required: true },
  { name: 'kategori', label: 'Kategori', required: true },
  { name: 'pembina', label: 'Pembina', required: true },
  { name: 'deskripsi', label: 'Deskripsi', multiline: true, rows: 4, required: false },
  { name: 'icon', label: 'Icon (Sports/MusicNote/Palette/Science/Language)', required: false },
];

function AdminEkstrakurikuler() {
  const [ekskul, setEkskul] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const columns = [
    { field: 'nama', headerName: 'Nama' },
    { field: 'kategori', headerName: 'Kategori' },
    { field: 'pembina', headerName: 'Pembina' },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAdminEkstrakurikuler();
      setEkskul(response.data.data || []);
    } catch (err) {
      setError('Gagal memuat data ekstrakurikuler');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setEditingId(null);
    setFormData({});
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setEditingId(row.id);
    setFormData(row);
    setOpenModal(true);
  };

  const handleDelete = async (row) => {
    if (window.confirm(`Hapus ekstrakurikuler "${row.nama}"?`)) {
      try {
        await deleteEkstrakurikuler(row.id);
        fetchData();
      } catch (err) {
        alert('Gagal menghapus data');
        console.error(err);
      }
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (editingId) {
        await updateEkstrakurikuler(editingId, data);
      } else {
        await createEkstrakurikuler(data);
      }
      setOpenModal(false);
      setFormData({});
      fetchData();
    } catch (err) {
      alert('Gagal menyimpan data');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <CrudTable
        title="Manajemen Ekstrakurikuler"
        columns={columns}
        data={ekskul}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CrudModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        title={editingId ? 'Edit Ekstrakurikuler' : 'Tambah Ekstrakurikuler'}
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
      />
    </Box>
  );
}

export default AdminEkstrakurikuler;
