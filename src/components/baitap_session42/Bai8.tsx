import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
export default function Bai8() {
  return (
    <div>Bai8
      <Tabs defaultActiveKey="home" id="my-tabs" className="mb-3">
        <Tab eventKey="home" title="Trang chủ">
          Tab content for Trang chủ
        </Tab>
        <Tab eventKey="profile" title="Giới thiệu">
          Tab content for Giới thiệu
        </Tab>
        <Tab eventKey="contact" title="Liên hệ" disabled>
          Tab content for Liên hệ
        </Tab>
      </Tabs>
    </div>
  )
}
