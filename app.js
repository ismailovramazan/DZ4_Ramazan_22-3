var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
    .reduce(function (acc,el){
    acc[el] = (acc[el] || 1 ) + 1;

        return acc;
},{}
)
console.log(tags)

var num_list = [1,2,33,6,56,6,77,8,9,899,9,800,3,-2,-2]
function getMaxOfArray() {
  return Math.max.apply(null, num_list);
}
console.log(getMaxOfArray())
