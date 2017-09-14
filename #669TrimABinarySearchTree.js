// Given a binary search tree and the lowest and highest boundaries as L and R, 
// trim the tree so that all its elements lies in [L, R] (R >= L).
// You might need to change the root of the tree, 
// so the result should return the new root of the trimmed binary search tree.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

var trimBST = function(root, L, R) {
    if(root == null) return null;
    //在L,R范围内
    if(root.val >= L && root.val <= R) {
    	//递归左右子树
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
        //返回当前符合的节点
        return root;
    }
    //因为是二叉查找树，所以当小于L时，只在它的右子树找，下面同理
    if(root.val < L)  return trimBST(root.right, L, R);
    if(root.val > R)  return trimBST(root.left, L, R);
};
