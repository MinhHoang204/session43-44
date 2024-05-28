import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
export default function Bai1() {
  return (
    <div>Bai1
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
