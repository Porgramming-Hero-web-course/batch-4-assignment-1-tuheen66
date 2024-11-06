{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    const strSentence = sentence.toLocaleLowerCase().split(/\W+/);
    const strWord = word.toLocaleLowerCase();

    let wordCount = 0;

    for (const searchWord of strSentence) {
      if (searchWord === strWord) {
        wordCount++;
      }
    }

    return wordCount;
  }

  //
}
