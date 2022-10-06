
    var removeKdigits = function(num, k) {
    
    if(num.length<=k) return "0";
    
    let st=[];
    
    for(let i=0;i<num.length;i++){
        
        while(st.length>0 && k!=0){
            let top=Number(st.pop());
            if(top<=Number(num[i])) {
                st.push(String(top));
                break;
            }
            k--;
        }
        st.push(num[i]);
    }
    while(k--){
        st.pop();
    }
    //Remove any leading zeros
    for(let i=0;i<st.length;i++){
        if(st[i]=='0'){
            st.shift();i--;
        }else{
            break;
        }
    }
    return st.length>0?st.join(''):'0';
};

//problem link:-https://leetcode.com/problems/remove-k-digits/
