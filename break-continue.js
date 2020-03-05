const nums = [1,2,4,5,6,7,8,9,10,11];

for(let i=0; i<nums.length; i++){

    if(nums[i]>4){
        break;                              //break
    }
    console.log(nums[i]);
}


const nums1 = [1,2,4,5,-6,7,8,-9,-10,-11];
for(let i=0; i<nums1.length; i++){

    if(nums1[i]<0){
        continue;                               //continue
    }
    console.log(nums1[i]);
}