class Utils {
  countValue(obj, value) {
    return Object.values(obj).filter((v) => v === value).length;
  }
}
export default Utils;
