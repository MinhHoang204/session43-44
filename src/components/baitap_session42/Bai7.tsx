import React from 'react'
import { Toast } from 'react-bootstrap'
export default function Bai7() {
  return (
    <div>Bai7
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ</Toast.Body>
      </Toast>
    </div>
  )
}
