import { Row, Col, Statistic, Button } from "antd";
import { BookOutlined, SnippetsOutlined, UsergroupAddOutlined, AppstoreOutlined } from '@ant-design/icons'

export default function Dashboard() {
  return (
    <div className="p-4 m-4">
      <Row gutter={4} className="p-10">
        <Col span={6}>
          <Statistic title="Total Estimates" value={500} prefix={<BookOutlined />} />
        </Col>
        <Col span={6}>
          <Statistic title="Total Invoices" value={750} prefix={<SnippetsOutlined />} />
        </Col>
        <Col span={6}>
          <Statistic title="Total Customers" value={500} prefix={<UsergroupAddOutlined />} />
        </Col>
        <Col span={6}>
          <Statistic title="Total Items" value={750} prefix={<AppstoreOutlined />} />
        </Col>
      </Row>

      <Row gutter={4} className="p-10">
        <Col span={6}>
          <Statistic title="Total Estimates (INR)" value={78445} precision={2} />
        </Col>
        <Col span={6}>
          <Statistic title="Total Invoices (INR)" value={84556} precision={2} />
        </Col>
        <Col span={6}>
          <Statistic title="Received" value={65000} precision={2} />
        </Col>
        <Col span={6}>
          <Statistic title="Dues" value={2000} precision={2} />
        </Col>
      </Row>
    </div>
  );
}