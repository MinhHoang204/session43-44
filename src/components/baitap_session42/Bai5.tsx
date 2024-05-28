import React from 'react'
import { Alert } from 'react-bootstrap'
export default function Bai5() {
  return (
    <div>Bai5
      <Alert variant="success">Tạo tài khoản thành công.</Alert>
      <Alert variant="info">Thêm mới tài khoản thất bại.</Alert>
      <Alert variant="warning">Tên không được để trống.</Alert>
    </div>
  )
}
