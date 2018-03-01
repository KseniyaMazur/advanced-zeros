module.exports = function getZerosCount(number, base) {
  let iBase = base;
  let zerosCount = number;
  let countInBase = 0;
  let countBaseInNumber, iNumber;
    
  for (let i = 2; i <= base; i++)
  {
    if (iBase % i === 0)
    {   
      countInBase = 0;
      while (iBase % i === 0) {
        countInBase++;
        iBase = iBase / i;
      }
      countBaseInNumber = 0;
      iNumber = number;
      while (Math.floor(iNumber / i) > 0) {
        countBaseInNumber += Math.floor(iNumber / i);
        iNumber = Math.floor(iNumber / i);
      }
      zerosCount = Math.min(zerosCount, Math.floor(countBaseInNumber / countInBase));
    }
  };
  return zerosCount;
}

// getZerosCount(16, 16);