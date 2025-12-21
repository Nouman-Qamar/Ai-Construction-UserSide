import { Card, Modal, Form, Button, Input, Select,Tag } from "antd";
import './model.css';
import { useState } from "react";


function Modalmenu() {
  const [visible, setvisible] = useState(true);
  const [open, setopen] = useState(true);
  const [vsble, setvsble] = useState(true);

  const[live,setlive]=useState(true);
  return (
    <div className="body">
      <Modal
        open={!visible}
        onCancel={() => setvisible(!visible)}
        onOk={() => setvisible(!visible)}
        footer={null}
      >
        <Form className="card-content">
          <h2 className="modal">Delete project ❌</h2>
          Are you sure you want to delete "Downtown Office Tower"? This action
          cannot be undone and will remove all associated data, including
          timelines, contractors, and progress reports.
        </Form>
        <button className="form-button" onClick={() => setvisible(!visible)}>
          Delete Project
        </button>
      </Modal>

      <Modal
        open={!open}
        onCancel={() => setopen(!open)}
        onOk={() => setopen(!open)}
        footer={null}
      >
        <Form className="card-content">
          <h2 className="modal">Project Created Successfully✅</h2> "Riverside
          Bridge Project" has been created and assigned to contractors. You can
          now track progress and manage timelines.
        </Form>
        <Button type="primary" className="Modal-button">
          View Project Detail
        </Button>
      </Modal>

      <Modal
        title="Create New Project"
        open={!vsble}
        onCancel={() => setvsble(!vsble)}
        onOk={() => setvsble(!vsble)}
        footer={null}
      >
        <Form layout="vertical" >
          <Form.Item
            label="Project Name"
            name="projectname"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g,lahore office complex"></Input>
          </Form.Item>
          <Form.Item
            label="Project Type"
            name="projecttype"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select option">
              <Select.Option value="Commercial"> Commercial</Select.Option>
              <Select.Option value="Residential"> Residential</Select.Option>
              <Select.Option value="Infrastructure">
                Infrastructure
              </Select.Option>
              <Select.Option value="Industrial"> Industrial</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Priority"
            name="priority"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select option">
              <Select.Option value="High"> High</Select.Option>
              <Select.Option value="Medium"> Medium</Select.Option>
              <Select.Option value="Low"> Low</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Start Date"
            name="startdate"
            rules={[{ required: true }]}
          >
            <Input placeholder="mm/dd/yy"></Input>
          </Form.Item>
          <Form.Item
            label="End Date"
            name="enddate"
            rules={[{ required: true }]}
          >
            <Input placeholder="mm/dd/yy"></Input>
          </Form.Item>
          <Form.Item label="Budget" name="budget" rules={[{ required: true }]}>
            <Input placeholder="$0.00"></Input>
          </Form.Item>
          <Form.Item label="Project description" name="description">
            <Input placeholder="Enter project detail,requirnment,and special consideration"></Input>
          </Form.Item>
          <Button htmlType="submit" type="primary" className="Modal-button">
            Submit
          </Button>
        </Form>
      </Modal>

      <Modal
        open={!live}
        onCancel={() => setlive(!live)}
        onOk={() => setlive(!live)}
        footer={null}
      >
        <Form className="card-content">
          <h2 className="modal">Project Status Information</h2>
          <div>
            Understanding project status indicators and what they mean for your
            construction timeline.
            <div className="modaldiv">
              <div>
                <Tag color="green" className="tag">
                  On track
                </Tag>
              </div>
              <div className="tag">
                Project is progressing as planned with no delays.
              </div>
            </div>
            <div className="modaldiv">
              <div>
                <Tag color="yellow" className="tag">
                  At Risk
                </Tag>
              </div>
              <div className="tag">
                Project has potential delays or issues requiring attention.
              </div>
            </div>
            <div className="modaldiv">
              <div>
                <Tag color="red" className="tag">
                  Delayed
                </Tag>
              </div>
              <div className="tag">
                Project is behind schedule and needs immediate action.
              </div>
            </div>
            <div className="modaldiv">
              <div>
                <Tag color="blue" className="tag">
                  Planning
                </Tag>
              </div>
              <div className="tag">
                Project is in the planning phase before construction begins.
              </div>
            </div>
          </div>
        </Form>
        <Button
          type="primary"
          className="formbutton"
          onClick={() => setlive(!live)}
        >
          Got it
        </Button>
      </Modal>

      <Card className="card-border">
        <div className="card-content">
          <h1>Modal Components</h1>
          <p className="Model-content">
            Modal dialogs for user interactioms and confirmation
          </p>
          <h4 className="Model-content">Modal Types</h4>
          <div className="Model-content">
            <Button
              type="primary"
              className="button"
              onClick={() => setvisible(!visible)}
            >
              Open Confirmation Modal
            </Button>
            <Button className="button-like" onClick={() => setopen(!open)}>
              Open Success Modal
            </Button>
            <Button
              type="primary"
              className="button"
              onClick={() => setvsble(!vsble)}
            >
              + Open Success Modal
            </Button>
            <Button className="button-2" onClick={() => setlive(!live)}>
              Open Info Modal
            </Button>
          </div>
          <Card className="card-mini">
            Note: Click the buttons above to see live modal examples. Each modal
            demonstrates different use cases including confirmations, success
            messages, forms, and informational dialogs.
          </Card>
        </div>
      </Card>
    </div>
  );
}
export default Modalmenu;
