class LinkedListItem
{
  public int Value { get; set; }
  public LinkedListItem Next { get; set; }
  public LinkedListItem Prev { get; set; }
  public LinkedListItem(int value, LinkedListItem Next)
  {
    this.Value = value;
    this.Next = null;
    this.Prev = null;
  }
}




class LinkedList
{
  public LinkedListItem Head { get; protected set; }
  public LinkedListItem Tail { get; protected set; }
  public int Length { get; protected set; }


  public LinkedList(LinkedListItem head)
  {
    this.SetHead(head);
  }

  public void SetHead(LinkedListItem head)
  {
    this.Head = this.Tail = null;
    this.Length = 0;

    if (head != null)
    {
      this.Head = head;
      this.Length = 1;

      var item = head;
      while (item.Next != null)
      {
        item = item.Next;
        this.Length++;
      }

      this.Tail = item;
    }
  }

  public void Append(LinkedListItem item)
  {
    if (this.Tail != null)
    {
      this.Tail.Next = item;
      item.Prev = this.Tail;
      this.Tail = item;
      this.Length++;
    }
    else
    {
      this.SetHead(item);
    }
  }

  public void Prepend(LinkedListItem item)
  {
    if (this.Head != null)
    {
      item.Next = this.Head;
      this.Head.Prev = item;
      this.Head = item;
      this.Length++;
    }
    else
    {
      this.SetHead(item);
    }
  }

  public LinkedListItem TraverseTo(int index)
  {
    var current = this.Head;
    var i = 0;
    while (i < index)
    {
      current = current.Next;
      i++;
    }

    return current;
  }

  public void Insert(int index, LinkedListItem item)
  {
    if (index == 0)
    {
      this.Prepend(item);
      return;
    }

    if (index >= this.Length)
    {
      this.Append(item);
      return;
    }


    var current = this.TraverseTo(index - 1);

    item.Next = current.Next;
    item.Prev = current;
    current.Next = item;
    item.Next.Prev = item;
    this.Length++;
  }

  public void Delete(int index)
  {
    if (0 == index)
    { // head
      this.Head = this.Head.Next;
      this.Length--;

      if (this.Length == 1)
        this.Tail = this.Head;
      else if (this.Length == 0)
        this.Tail = null;
      else
        this.Head.Prev = null;

      return;
    }

    var current = this.TraverseTo(index);

    current.Prev.Next = current.Next;
    if (current.Next != null)
    {
      current.Next.Prev = current.Prev;
    }

    if (this.Length - 1 == index)
    {
      this.Tail = current.Prev;
    }

    this.Length--;
  }

  public int[] values()
  {
    var item = this.Head;

    var values = new int[this.Length];
    var idx = 0;
    while (item != null)
    {
      values[idx++] = item.Value;
      item = item.Next;
    }

    return values;
  }

  public void reverse()
  {
    var current = this.Tail;
    while (current != null)
    {
      var tmpPrev = current.Prev;
      var tmpNext = current.Next;

      current.Next = current.Prev;
      current.Prev = tmpNext;

      current = tmpPrev;
    }

    var tmpTail = this.Tail;
    this.Tail = this.Head;
    this.Head = tmpTail;
  }

  public void print()
  {
    var current = this.Head;
    while (current != null)
    {
      Console.WriteLine("{0} --> ( {1} ) --> {2}",
        current.Prev != null ? current.Prev.Value : new int?(),
        current.Value,
        current.Next != null ? current.Next.Value : new int?());

      current = current.Next;
    }
  }
}