getName = (filePath) => {
  const _path = filePath[0];
  const filename = _path.replace(/^.*[\\\/]/, '');

  return filename;
}

module.exports = {
  getName
}
