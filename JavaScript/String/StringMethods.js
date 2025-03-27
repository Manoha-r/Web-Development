//slice
let a ="Geeks for Geeks";

let b=a.slice(0,a.length-2);
let c=a.slice(6,10);
let d = a.slice(10);

console.log("slic : "+b);
console.log(c);
console.log(d);

//subString()
let e = "Geeks for Geeks";

let part =e.substring(6,11);
console.log("subString: "+part);

//subStr()
let f = "Geeks for Geeks";

let par =e.substr(6,11);
console.log("subStr: "+par);

//replace
let str = "geeks for geeks";
let rep = str.replace("geeks","Geeks");
console.log("replace : "+rep);

//replaceAll
let st = "geeks foR geeks";
let re = str.replaceAll("geeks","Geeks");
console.log("replace : "+re);

//toUpperCase
console.log("tpUpperCase : "+st.toUpperCase());

//toLowerCase

console.log("toLowerCase : "+st.toLowerCase());

let vr="  geeks ";
let vr1="for geeks";
console.log("concatination : "+vr.concat(vr1));

//trim
console.log("trim : "+vr.trim());

//trimStart
console.log("trimStart : "+vr.trimStart());

//trimEnd
console.log("trimEnd : "+vr.trimEnd());

//charAt
console.log("charAt : "+vr.charAt(4));

//CharCodeAt return the unicode of the character at the specified index
console.log("CharCodeAt : "+vr.charCodeAt(4));

//split
let gfg=str;
let gfg1=gfg.split(" ");
console.log("split : "+gfg1);

//valueOf

let g = new String("geeks for geeks");
console.log(g.valueOf());

//indexOf
console.log("indexOf : "+a.indexOf("e"));