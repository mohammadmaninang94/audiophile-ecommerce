
// Helper to divide title text
export const newArr = (currentArr) => {
    const copyArr = [...currentArr];
    
    copyArr.pop();
    return copyArr.join(' ').toUpperCase();
};