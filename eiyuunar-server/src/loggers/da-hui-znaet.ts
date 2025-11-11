export default function RequestLogger(objects: Array<object> | object) {
  if (Array.isArray(objects)) {
    objects.forEach((object: object) => {
      console.log(object);
    });
  } else {
    console.log(objects);
  }
}
