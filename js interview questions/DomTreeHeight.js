function getDOMTreeHeight(node) {
    if (!node) {
        return 0;
    } else {
        let leftHeight = getDOMTreeHeight(node.leftElement);
        let rightHeight = getDOMTreeHeight(node.rightElement);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }
}
let treeHeight = getDOMTreeHeight(document.querySelector('div'));
console.log(treeHeight);