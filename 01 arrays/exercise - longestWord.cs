// Longest Word
// https://coderbyte.com/information/Longest%20Word

public class Solution
{
  public static string LongestWordRegex(string text)
  {
    if (null == text || text.Length == 0)
    {
      return null;
    }

    System.Text.RegularExpressions.Regex regex =
        new System.Text.RegularExpressions.Regex(@"(\w+)");
    var matches = regex.Matches(text);
    return matches
      .OrderByDescending(a => a.Value.Length)
      .FirstOrDefault()?.Value;
  }

  public static string LongestWord(string text)
  {
    if (null == text || text.Length == 0)
    {
      return null;
    }


    int wordStartIdx = 0;
    int wordEndIdx = 0;

    int tmpStartIdx = 0;

    for (int i = 0; i < text.Length; i++)
    {
      char c = text[i];

      // delimiter
      if (false == char.IsLetter(c) || i == text.Length - 1)
      {
        if (i == text.Length - 1)
          i++;

        if (i - tmpStartIdx > wordEndIdx - wordStartIdx)
        {
          wordStartIdx = tmpStartIdx;
          wordEndIdx = i;
        }

        tmpStartIdx = i + 1;
      }
    }

    if (wordEndIdx - wordStartIdx - 1 > 0)
    {
      return text.Substring(wordStartIdx, wordEndIdx - wordStartIdx);
    }

    return null;
  }
}