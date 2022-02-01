import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

function FormPhoto() {
  const getUploadParams = ({ file }) => {
    const body = new FormData()
    body.append('images', file)
    return {
      url: 'http://localhost:8000/upload',
      body,
    }
  }

  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove())
  }

  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        accept="image/*"
        maxFiles={1}
        multiple={false}
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 },
        }}
      />
    </div>
  )
}

export default FormPhoto
