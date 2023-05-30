import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";

const WidgetBarangDetail = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [barang, setBarang] = useState({});
  const handleOpen = () => {
    setModalIsOpen(true);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;

    if (type === "number") {
      value = parseInt(value);
    }
    setBarang((values) => ({ ...values, [name]: value }));
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  //masih bingung
  useEffect(() => {
    if (!_.isEmpty(item)) {
      setBarang(item);
    }
  }, [item]);
  return (
    <>
      <Button onClick={handleOpen} disabled={_.isEmpty(item)}>
        <FaEdit /> Edit
      </Button>
      <Modal show={modalIsOpen} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{item.namaBarang}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-3">
          <Form.Group>
            <Form.Label>Kode Barang</Form.Label>
            <Form.Control
              disabled
              value={barang.kodeBarang || ""}
              onChange={() => {}}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              value={barang.namaBarang || ""}
              isInvalid={_.isEmpty(barang.namaBarang)}
              isValid={!_.isEmpty(barang.namaBarang)}
              name="namaBarang"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              value={barang.hargaBeli || ""}
              type="number"
              name="hargaBeli"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              value={barang.hargaJual || ""}
              type="number"
              name="hargaJual"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Jumlah Barang</Form.Label>
            <Form.Control
              value={barang.jumlahBarang || ""}
              type="number"
              name="jumlahBarang"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            <FaArrowLeft onClick={handleClose} /> BATAL
          </Button>
          <Button variant="danger">
            <FaArrowLeft onClick={handleClose} /> HAPUS
          </Button>
          <Button>
            <FaSave /> SIMPAN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WidgetBarangDetail;

//kencengin di boostrap flex,grid,Modal
