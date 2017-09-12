/** 
题目:传入两个二叉树，合并这两个二叉树。合并规则:同位有两个值则相加，一个值则就是该值，空位为空。
Input: 
	Tree 1                     Tree 2                  
         1                         2                             
        / \                       / \                            
       3   2                     1   3                        
      /                           \   \                      
     5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7 
*/ 
 
	

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1==null){
		return t2;
	}
	if(t2==null){
		return t1;
	}
	t1.val+=t2.val;
	t1.left=mergeTrees(t1.left,t2.left);
	t1.right=mergeTrees(t1.right,t2.right);
	return t1;
};




