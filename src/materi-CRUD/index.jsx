import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/CourseCreateModal";
import { useEffect, useState } from "react";
import courseService from "./utils/service";
import CourseEditModal from "./components/CourseEditModal";
import CourseConfirmModal from "./components/CourseConfirmModal";

const MateriCRUD = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const openEditModal = (courseItem) => {
    setSelectedCourse(courseItem)
    setShowEditModal(true);
  }

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowEditModal(false)
  }

  const openDeleteModal = (courseItem) => {
    setSelectedCourse(courseItem)
    setShowDeleteModal(true);
  }

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false)
  }

  const handleDeleteCourse = () => {
    const {id} = selectedCourse;
    courseService.deleteCourse(id);
    fetchCourses();
    closeDeleteModal()
  }

  const handleEditCourse = (payload) => {
    const {id,  ...others} = payload;
    courseService.updateCourse(id, others)
    fetchCourses()
    closeEditModal()
  }

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses()
  };

  const fetchCourses = () => {
    const result = courseService.getCourses();
    setCourses(result.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container style={{ padding: "50px" }}>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <h3 style={{ marginBottom: "24px" }}>Course list</h3>

          <Button onClick={toggleCreateModal} variant="success">
            Add
          </Button>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                return (
                  <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>
                      <Button onClick={() => openEditModal(course)} variant="warning">Edit</Button> {' '}
                      <Button onClick={() => openDeleteModal(course)} variant="danger">Delete</Button>
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModal
        handleSubmit={handleAddCourse}
        show={showCreateModal}
        handleClose={toggleCreateModal}
      />
      <CourseEditModal
        show={showEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleEditCourse}
        data={selectedCourse}
      />
      <CourseConfirmModal show={showDeleteModal} handleClose={closeDeleteModal} onAgree={handleDeleteCourse}  />
    </Container>
  );
};

export default MateriCRUD;
