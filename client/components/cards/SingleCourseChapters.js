import { List, Avatar } from "antd";
const { Item } = List;

const SingleCourseChapters = ({
  chapters,
  setPreview,
  showModal,
  setShowModal,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col lesson-list">
          {chapters && <h4>{chapters.length} chapitre</h4>}
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={chapters}
            renderItem={(item, index) => (
              <Item>
                <Item.Meta
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                />
              </Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCourseChapters;
