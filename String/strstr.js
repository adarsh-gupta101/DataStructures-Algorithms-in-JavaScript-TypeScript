var strStr = function (haystack, needle) {
  if (needle == "") return 0;
  return haystack.indexOf(needle)>=0 ? haystack.indexOf(needle) : -1;
};

console.log( strStr("a", "a"));
