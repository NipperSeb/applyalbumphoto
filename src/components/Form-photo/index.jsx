import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

function FormPhoto({ persistForm }) {
  const toast = (innerHTML) => {
    const el = document.getElementById('toast')
    el.innerHTML = innerHTML
    el.className = 'show'
    setTimeout(() => {
      el.className = el.className.replace('show', '')
    }, 3000)
  }

  const getUploadParams = ({ file }) => {
    const body = new FormData()
    body.append('images', file)
    return {
      url: 'http://localhost:8000/upload',
      body,
    }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, le téléchargement a échoué...`)
    }
    persistForm()
  }

  return (
    <div>
      <div id="toast"></div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        inputContent="Click pour importer ta photo"
        accept="image/*"
        maxFiles={1}
        multiple={false}
        styles={{
          dropzone: { minHeight: 100, maxHeight: 150 },
        }}
      />
    </div>
  )
}

export default FormPhoto
