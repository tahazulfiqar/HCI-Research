// Dynamic image import: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
export default function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
