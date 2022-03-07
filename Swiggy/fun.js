// Q.Write A Function In Which When arugument as nimber "1" is pass then 
// output will be "0" And if input is pass as '0'output will be "1" 

// 1.method first
function myfun(num){
    return 1-num;
}
myfun(1);

// 2.method second 

function myfun(n){
    return (n+1)%2;
}
myfun(1);
// myfun(1) O/P==> 0
// myfun(0) O/P==> 1