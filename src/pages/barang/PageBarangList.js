import { Button, Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import WidgetBaseContainer from "../../widgets/base/WidgetBaseContainer";
import WidgetBaseTitleActions from "../../widgets/base/WidgetBaseTitleActions";
import { useState } from "react";
import MockBarang from "../../mocks/MockBarang";
import _ from "lodash";
import WidgetBarangDetail from "../../widgets/barang/WidgetBarangDetail";
const PageBarangList = () => {
  const [daftarBarang] = useState(MockBarang);
  const [barang, setBarang] = useState({});

  const handleSelected = (item) => {
    if (_.isEmpty(barang) || barang.kodeBarang !== item.kodeBarang) {
      setBarang(item);
    } else if (barang.kodeBarang === item.kodeBarang) {
      setBarang({});
    }
  };
  return (
    <WidgetBaseContainer>
      <WidgetBaseTitleActions
        title={"Daftar Barang"}
        buttonActions={
          <>
            <WidgetBarangDetail item={barang} />
            <Button>
              <FaPlusCircle /> Tambah
            </Button>
          </>
        }
      />
      <Table bordered>
        <thead>
          <tr>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Jumlah Barang</th>
          </tr>
        </thead>
        <tbody>
          {daftarBarang.map((item, index) => (
            <tr
              style={{ cursor: "pointer" }}
              className={
                item.kodeBarang === barang.kodeBarang ? "table-active" : ""
              }
              onClick={() => handleSelected(item)}
              key={index}
            >
              <td>{item.kodeBarang}</td>
              <td>{item.namaBarang}</td>
              <td>{item.hargaBeli}</td>
              <td>{item.hargaJual}</td>
              <td>{item.jumlahBarang}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </WidgetBaseContainer>
  );
};

export default PageBarangList;
