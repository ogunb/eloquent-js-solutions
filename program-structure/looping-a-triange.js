/*
#
##
###
####
#####
######
#######
*/
function printTriangle(size) {
  let hash = '';
  for (let i = 0; i < size; i++) {
    hash += '#';
    console.log(hash);
  }
}
printTriangle(8);
