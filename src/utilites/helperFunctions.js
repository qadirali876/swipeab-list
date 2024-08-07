export const sortArrayData = (data) => {
    const sortedData = [...data].sort((a, b) => {
        if (a.pin && !b.pin) {
          return -1;
        } else if (!a.pin && b.pin) {
          return 1;
        } else {
          return 0;
        }
      });

      return sortedData;
}