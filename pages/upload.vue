<script setup lang="ts">
const file = ref<File | string>('');
const newlyUploadedFile = ref<string>('');
const handleFileChange = (fileData: Event) => {
  const fileInputData = fileData.target as HTMLInputElement;
  if (fileInputData.files && fileInputData.files?.length > 0) {
    file.value = fileInputData.files[0];
  }
};

const handleFileUpload = async () => {
  const body = new FormData();
  console.log('file', file.value)
  body.append('file', file.value);
  console.log('upload', body);
  await useFetch('/api/enrollments', {
    method: 'POST',
    body,
    onResponse(context) {
      newlyUploadedFile.value = context.response._data;
    },
  });
};
</script>
<template>
  <div>
    <input name="file" type="file" @change="handleFileChange" />
    <div style="margin-top: 20px">
      <button @click.prevent="handleFileUpload">Upload File</button>
    </div>
    <div>
      <img :src="newlyUploadedFile" />
      {{ newlyUploadedFile }}
    </div>
    <div>
      Check the
      <pre>'~/public/assets/images'</pre>
    </div>
    <div>Note: If you don't see the uploaded images on the client-side. It is because stackblitz takes time to upload the file inside the images folder. Displaying the uploaded file will work on local machine.</div>
  </div>
</template>
<style scoped>
img {
  width: 500px;
}
pre {
  font-family: Consolas, monospace;
  background-color: #ddd;
}
</style>
