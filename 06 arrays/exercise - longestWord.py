import re

def longestWord(text):
  if (None == text or 0 == len(text)):
    return None

  arr = re.findall("(\w+)", text)

  arr = sorted(arr, key=lambda  itm: len(itm), reverse=True)
  
  if (len(arr) > 0):
    return arr[0]
  
  return None


longestWord ('fun## time')