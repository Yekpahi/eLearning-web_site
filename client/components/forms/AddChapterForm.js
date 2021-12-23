import { Button } from "antd";

const AddChapterForm = ({
  values,
  setValues,
  handleAddChapter,
  uploading,


}) => {
  return (
    <div className="container pt-3">
      <form onSubmit={handleAddChapter}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          placeholder="Title"
          autoFocus
          required
        />

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setValues({ ...values, description: e.target.value })}
          value={values.description}
          placeholder="Description"
        ></textarea>

        <Button
          onClick={handleAddChapter}
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploading}
          shape="round"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddChapterForm;
