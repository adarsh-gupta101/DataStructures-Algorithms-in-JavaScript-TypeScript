var myAtoi = function(s) {
    let news=s
    let res=[],res2=[]
    let num="+"
    
    // console.log(news.split(" "))
    // news=news.replace("   ","")

    for(i in news)
    {
        if(news[i]=="-")
        {
            num="-"
        }
    }

    for(i=0;i<news.length;i++){
        if(news[i]!=" "){
            res.push(news[i])
        }
    }
    // console.log(res)
    // return news

    //case 1:
    if(news.length==0){
        return 0
    }

    //case 2:
    for(let i=0;i<res.length;i++){
        
        // console.log(news[i])
        res2.push(Number(res[i]))
        // console.log(Number(res[i]))
    }
    // console.log(res2)

    //case 3:
    return  1?num+ Number(res2.filter(function(item){return item}).join("")):num
    
};

console.log(myAtoi("words and 987"))