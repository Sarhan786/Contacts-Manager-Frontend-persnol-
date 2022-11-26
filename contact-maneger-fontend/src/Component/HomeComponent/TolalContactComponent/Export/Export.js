import FileUploadIcon from "@mui/icons-material/FileUpload";
const Export = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-title="Tooltip on left"
      >
        <FileUploadIcon /> Export
      </button>
    </>
  );
};

export default Export;
