module.exports = function towelSort (matrix) {
  return (Array.isArray(matrix) && matrix.length) 
    ? matrix.filter((el, i) => i % 2 !== 0 ? el.reverse() : el).reduce((a,b) => a.concat(b))
    : [];
}
