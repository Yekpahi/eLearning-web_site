import { Button } from "antd";


const UpdateChapterForm = ({
  current,
  setCurrent,
  handleUpdateChapter,
}) => {
  return (
    <div className="container pt-3">
      {/* {JSON.stringify(current)} */}
      <form onSubmit={handleUpdateChapter}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setCurrent({ ...current, title: e.target.value })}
          value={current.title}
          autoFocus
          required
        />

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setCurrent({ ...current, description: e.target.value })}
          value={current.description}
        ></textarea>

        <Button
          onClick={handleUpdateChapter}
          className="col mt-3"
          size="large"
          type="primary"
          shape="round"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default UpdateChapterForm;
