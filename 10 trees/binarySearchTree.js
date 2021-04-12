class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = undefined;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root)
      this.root = newNode;
    else {
      let parent = this.findParent(value, this.root);
      if (value > parent.value)
        parent.right = newNode;
      else
        parent.left = newNode;
    }

    this.length++;
    return newNode;
  }

  lookup(value) {
    let node = undefined;
    let parentNode = undefined;

    let result = this.findNode(value, this.root);

    return result.node;
  }

  delete(value) {
    let targetNode = undefined;
    let targetParent = undefined;

    // find target to delete
    let result = this.findNode(value, this.root);
    targetNode = result.node;
    targetParent = result.parentNode;

    // not found, return
    if (!targetNode)
      return;

    // target is on the left side of its parent
    let currentNodeIsLeft = targetParent && targetParent.left == targetNode;

    if (!targetNode.left && !targetNode.right) // target is a leaf node, has no children
    {
      if (!targetParent) // target is the root
        this.root = undefined; // remove root
      else // target is non-root
      {
        // remove from hierarch
        if (currentNodeIsLeft)
          targetParent.left = undefined;
        else
          targetParent.right = undefined;
      }
    }
    else // one or two children
    {
      if (!targetNode.right)// target has one child, left
      {
        if (!targetParent) // target is the root
          this.root = targetNode.left; // change root to be the only child
        else // target is non-root
        {
          // remove from hierarch
          if (currentNodeIsLeft)
            targetParent.left = targetNode.left;
          else
            targetParent.right = targetNode.left;
        }
      }
      else if (!targetNode.left)// target has one child, right
      {
        if (!targetParent) // target is the root
          this.root = targetNode.right; // change root to be the only child
        else {
          // remove from hierarch
          if (currentNodeIsLeft)
            targetParent.left = targetNode.right;
          else
            targetParent.right = targetNode.right;
        }
      }
      else // two children
      {
        let minimum = undefined;
        let minimumParent = undefined;

        // find the first successor, starting from the right node
        result = FindMinimumChild(targetNode);
        minimum = result.minimumNode;
        minimumParent = result.minimumParent;

        // the right node has no children, then it's the leaf
        let minimumIsDirectChild = false;
        if (!minimum) {
          minimum = targetNode.right;
          minimumParent = targetNode;
          minimumIsDirectChild = true;
        }

        if (false == minimumIsDirectChild) {
          // not a direct child, then it's certainly left
          // and certainly it does not have a left
          // connect the successor's parent to successor's children
          minimumParent.left = minimum.right;
        }

        // connect target parent to the found successor
        if (!targetParent) // this is the root
        {
          this.root = minimum;
        }
        else {
          if (currentNodeIsLeft)
            targetParent.left = minimum;
          else
            targetParent.right = minimum;
        }

        // set the successor links
        minimum.left = targetNode.left; // take over the left side of the deleted target
        if (minimumIsDirectChild == false) // for the right side, if the successor is not a direct child of the target
          minimum.right = targetNode.right; // replace with the current right

      }
    }

    this.Length--;

  }


  findNode(value, rootNode) {
    let node = undefined;
    let parent = undefined;

    if (!rootNode)
      return { node: undefined, parentNode: undefined };

    let currentNode = rootNode;
    let parentNode = null;

    while (true) {
      if (!currentNode)
        break;

      if (currentNode.value == value) {
        node = currentNode;
        parent = parentNode;
        break;
      }
      else {
        parentNode = currentNode;
        if (value < currentNode.value)
          currentNode = currentNode.left;
        else
          currentNode = currentNode.right;

      }
    }
    return { node: node, parentNode: parentNode };

  }

  findParent(value, node) {
    if (!node)
      return null;

    if (node.value == value)
      throw new Exception("No duplicate vertex allowed!");

    if (value < node.value)
      return !node.left ? node : this.findParent(value, node.left);
    else // greater than
      return !node.right ? node : this.findParent(value, node.right);
  }

  findMinimumChild(node) {
    let minimum = node.left;
    let parent = node;
    while (minimum && minimum.left) {
      minimum = minimum.left;
      parent = minimum;
    }

    return { minimum: minimum, minimumParent: parent };
  }


  traversePreorder() {
    this._internalTraversePreorder(this.root, '', 0);
  }

  _internalTraversePreorder(node, prefix, level) {
    if (!node)
      return;

    console.log('\t'.repeat(level) + prefix + node.value);

    this._internalTraversePreorder(node.left, "L:", level + 1);
    this._internalTraversePreorder(node.right, "R:", level + 1);
  }
}



let tree = new BinarySearchTree();
tree.insert(60);
tree.insert(30);
tree.insert(1);
tree.insert(55);
tree.insert(38);
tree.insert(44);

tree.traversePreorder();
console.log('');

tree.delete(60);
tree.traversePreorder();