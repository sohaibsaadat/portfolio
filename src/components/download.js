export const downloadPDF = (filePath, fileName) => {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.click();
};