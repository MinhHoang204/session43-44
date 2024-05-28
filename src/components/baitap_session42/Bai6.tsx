import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
export default function Bai6() {
  return (
    <div>Bai6
      <ButtonGroup>
        <Button variant="primary">Lưu</Button>
        <Button variant="secondary">Hủy</Button>
        <Button variant="success">Thành công</Button>
        <Button variant="warning">Cảnh báo</Button>
        <Button variant="danger">Báo lỗi</Button>
        <Button variant="info">Thông tin</Button>
        <Button variant="link">Đường dẫn</Button>
      </ButtonGroup>
    </div>
  )
}
