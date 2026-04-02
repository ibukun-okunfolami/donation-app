export const paginate = <T>(data: T[], pageNo: number, pageSize: number) => {
  const startIndex = (pageNo - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= data.length) {
    return [];
  }
  return data.slice(startIndex, endIndex);
};
