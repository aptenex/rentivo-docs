export const getColWidth = (type, colNumber) => {
   const p =[];
   console.log(type, colNumber);
   const objValues = Object.entries(COL_WIDTHS[type ?? 'Stacked [ 12, 12 ]']);
   for (let [key, value] of objValues) {
      p[key] = value[ colNumber ];
   }
   return p;
};

export const COL_WIDTHS = {
  'TwoCol [ 6, 6 ]' : {
    xs : [12,12],
    sm : [12,12],
    lg : [6,6]
  },
  'Stacked [ 12, 12 ]' : {
    xs : [12,12],
    sm : [12,12]
  }
};

