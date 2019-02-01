export const addItem = (val: any, element = "output") => {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById(element).appendChild(node);
};
