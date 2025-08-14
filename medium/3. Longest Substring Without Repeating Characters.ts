function subarraySum(nums: number[], k: number): number {
    const prefixSumMap = new Map<number, number>();
    prefixSumMap.set(0, 1);
    
    let count = 0;
    let sum = 0;
    for(const num of nums) {
        sum += num;
        
        if(prefixSumMap.has(sum - k))
            count += prefixSumMap.get(sum - k);
        
        prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
    }
    
    return count;
};