function getSeven(num){
    while(num>6){
        if(isContainSever(num)||num%7==0){
            return num;
        }
        num--;
    }
    return `${num} is smaller than 7`
}

function isContainSever(num){
    while(num>0){
        let temp=num%10;
        if(temp===7)
        return true;
        num=num/10;
    }
    return false;
}

export default getSeven;