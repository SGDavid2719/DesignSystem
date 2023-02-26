export const dateDiffInDays = (firstDate: Date, seconddate: Date) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    
    const utc1 = Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    const utc2 = Date.UTC(seconddate.getFullYear(), seconddate.getMonth(), seconddate.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}