var romanToInt = function (s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        switch (c) {
            case 'I': arr.push(1);
                break;
            case 'V': arr.push(5);
                break;
            case 'X': arr.push(10);
                break;
            case 'L': arr.push(50);
                break;
            case 'C': arr.push(100);
                break;
            case 'D': arr.push(500);
                break;
            case 'M': arr.push(1000);
                break;
        }
    }

    var sum1 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
            var sum2 = arr[i + 1] - arr[i];
            sum1 += sum2;
            i++;
        }
        else {
            sum1 += arr[i];
        }
    }
    return sum1;
};