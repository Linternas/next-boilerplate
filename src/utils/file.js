import API from 'api';

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const fileExtensionValidator = async (file, allowExtensions) => {
  const isExistType = allowExtensions.findIndex((x) => x === file.type);

  if (isExistType === -1) {
    return false;
  } else {
    return true;
  }
};

export const imageUpload = async (files) => {
  return new Promise(async (resolve, reject) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', files[0]);

    await API.post('/common/file/upload', bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail || '이미지 업로드 실패');
        reject(err);
      });
  });
};

export const attachUpload = async (files) => {
  return new Promise(async (resolve, reject) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', files[0]);

    await API.post('/common/file/upload/attach', bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail || '첨부파일 업로드 실패');
        reject(err);
      });
  });
};

export const fileDownload = async (filePath) => {
  return new Promise(async (resolve, reject) => {
    await API.post(
      '/common/file/download',
      {
        file_url: filePath
      },
      { responseType: 'blob' }
    )
      .then((res) => {
        resolve({ data: res.data, name: filePath });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
