import { useState, useEffect } from 'react';
import { Box, Avatar, CircularProgress, Alert } from '@mui/material';
import CrudTable from '../../components/admin/CrudTable';
import CrudModal from '../../components/admin/CrudModal';
import { getAdminGaleri, createGaleri, updateGaleri, deleteGaleri, getImageUrl } from '../../services/api';

const formFields = [
  { name: 'judul', label: 'Judul Foto', required: true },
  { 
    name: 'kategori', 
    label: 'Kategori', 
    type: 'select',
    options: ['CEREMONY', 'SCHOOL', 'STUDENTS'],
    required: true 
  },
  { name: 'foto', label: 'Upload Foto', type: 'file', required: false },
];

function AdminGaleri() {
  const [galeri, setGaleri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const columns = [
    {
      field: 'foto',
      headerName: 'Foto',
      render: (value) => <Avatar src={getImageUrl(value)} variant="rounded" />,
    },
    { field: 'judul', headerName: 'Judul' },
    { field: 'kategori', headerName: 'Kategori' },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAdminGaleri();
      setGaleri(response.data.data || []);
    } catch (err) {
      setError('Gagal memuat data galeri');
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
    if (window.confirm(`Hapus foto "${row.judul}"?`)) {
      try {
        await deleteGaleri(row.id);
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
        await updateGaleri(editingId, data);
      } else {
        await createGaleri(data);
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
        title="Manajemen Galeri"
        columns={columns}
        data={galeri}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CrudModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        title={editingId ? 'Edit Galeri' : 'Tambah Galeri'}
        fields={formFields}
        formData={formData}
        setFormData={setFormData}
      />
    </Box>
  );
}

export default AdminGaleri;
