import React from "react";
import { Container, Table } from "react-bootstrap";

const TableComponent = () => {
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 6 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableComponent;
