public class Node
{
  public int Value { get; set; }
  public Node Left { get; set; }
  public Node Right { get; set; }
  public Node() { }
  public Node(int value) { this.Value = value; }
  public override string ToString()
  {
    return Value.ToString();
  }
}

public class BinarySearchTree
{
  public Node Root { get; private set; }
  public int Length { get; private set; }

  public BinarySearchTree() { }


  public Node Insert(int value)
  {
    Node newNode = new Node(value);

    if (Root == null)
      this.Root = newNode;
    else
    {
      Node parent = FindParent(value, Root);
      if (value > parent.Value)
        parent.Right = newNode;
      else
        parent.Left = newNode;
    }

    Length++;
    return newNode;
  }

  public Node Lookup(int value)
  {
    Node node;
    Node parentNode;

    FindNode(value, this.Root, out node, out parentNode);
    return node;
  }

  public void Delete(int value)
  {
    Node targetNode;
    Node targetParent;

    // find target to delete
    FindNode(value, this.Root, out targetNode, out targetParent);

    // not found, return
    if (targetNode == null)
      return;

    // target is on the left side of its parent
    bool currentNodeIsLeft = targetParent != null && targetParent.Left == targetNode;

    if (null == targetNode.Left && null == targetNode.Right) // target is a leaf node, has no children
    {
      if (targetParent == null) // target is the root
        this.Root = null; // remove root
      else // target is non-root
      {
        // remove from hierarch
        if (currentNodeIsLeft)
          targetParent.Left = null;
        else
          targetParent.Right = null;
      }
    }
    else // one or two children
    {
      if (null == targetNode.Right)// target has one child, left
      {
        if (null == targetParent) // target is the root
          this.Root = targetNode.Left; // change root to be the only child
        else // target is non-root
        {
          // remove from hierarch
          if (currentNodeIsLeft)
            targetParent.Left = targetNode.Left;
          else
            targetParent.Right = targetNode.Left;
        }
      }
      else if (null == targetNode.Left)// target has one child, right
      {
        if (null == targetParent) // target is the root
          this.Root = targetNode.Right; // change root to be the only child
        else
        {
          // remove from hierarch
          if (currentNodeIsLeft)
            targetParent.Left = targetNode.Right;
          else
            targetParent.Right = targetNode.Right;
        }
      }
      else // two children
      {
        Node minimum, minimumParent;

        // find the first successor, starting from the right node
        FindMinimumChild(targetNode.Right, out minimum, out minimumParent);

        // the right node has no children, then it's the leaf
        bool minimumIsDirectChild = false;
        if (null == minimum)
        {
          minimum = targetNode.Right;
          minimumParent = targetNode;
          minimumIsDirectChild = true;
        }

        if (false == minimumIsDirectChild)
        {
          // not a direct child, then it's certainly left
          // and certainly it does not have a left
          // connect the successor's parent to successor's children
          minimumParent.Left = minimum.Right;
        }

        // connect target parent to the found successor
        if (targetParent == null) // this is the root
        {
          this.Root = minimum;
        }
        else
        {
          if (currentNodeIsLeft)
            targetParent.Left = minimum;
          else
            targetParent.Right = minimum;
        }

        // set the successor links
        minimum.Left = targetNode.Left; // take over the left side of the deleted target
        if (minimumIsDirectChild == false) // for the right side, if the successor is not a direct child of the target
          minimum.Right = targetNode.Right; // replace with the current right
 
      }
    }

    this.Length--;

  }

  private void FindNode(int value, Node rootNode, out Node node, out Node parent)
  {
    node = parent = null;

    if (rootNode == null)
      return;

    Node currentNode = rootNode;
    Node parentNode = null;

    while (true)
    {
      if (null == currentNode)
        break;

      if (currentNode.Value == value)
      {
        node = currentNode;
        parent = parentNode;
        break;
      }
      else
      {
        parentNode = currentNode;
        if (value < currentNode.Value)
          currentNode = currentNode.Left;
        else
          currentNode = currentNode.Right;

      }
    }

  }

  private Node FindParent(int value, Node node)
  {
    if (null == node)
      return null;

    if (node.Value == value)
      throw new Exception("No duplicate vertex allowed!");

    if (value < node.Value)
      return node.Left == null ? node : FindParent(value, node.Left);
    else // greater than
      return node.Right == null ? node : FindParent(value, node.Right);
  }

  private void FindMinimumChild(Node node, out Node minimum, out Node parent)
  {
    minimum = node.Left;
    parent = node;
    while (minimum != null && minimum.Left != null)
    {
      minimum = minimum.Left;
      parent = minimum;
    }
  }


  public void TraversePreorder()
  {
    InternalTraversePreorder(this.Root, string.Empty, 0);
  }

  protected void InternalTraversePreorder(Node node, string prefix, int level)
  {
    if (node == null)
      return;

    Console.Write(new string('\t', level) + prefix);
    Console.WriteLine(node.Value);

    InternalTraversePreorder(node.Left, "L:", level + 1);
    InternalTraversePreorder(node.Right, "R:", level + 1);
  }
}