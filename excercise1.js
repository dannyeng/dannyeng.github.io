
/** Writing Excercise #1: Commenting Code  
 *
 * @author Danny Eng
 * April 1st 2016
 */

/** Count the number of instances of each needle in the haystack (case-sensitive)
 * 
 * @param haystack			A string containing various words separated by whitespace
 * @param needles			Array of at most 5 words
 */
public static void findNeedles(String haystack, String[] needles){
// needles contains more than 5 words. Error.
if(needles.length > 5){
	System.err.println("Too many words!");
}

else{
	// Instance counter in haystack for each needle
	int[] countArray = new int[needles.length];
	
	// Suggestion: Move "String[] words = haystack.split" here

	// Linearly scan needles
	for(int i = 0; i < needles.length; i++){
		// Separate words in haystack (by whitespace) into array of words (split matches as many words as possible)
		String[] words = haystack.split("[ \"\'\t\n\b\f\r]", 0);
		// Linearly scan words in haystack
		for(int j = 0; j < words.length; j++){
			// Word in haystack matches current needle
			if(words[j].compareTo(needles[i]) == 0){
				// Increase current needle instance count
				countArray[i]++;
			}
		}
		// Suggestion: Can print result here instead
	}

	// Print each needle word and its number of instances in haystack
	for (int j = 0; j < needles.length; j++) {
		// Suggestion: "needls" typo should change to "needles".
		System.out.println(needls[j] + ": " + countArray[j]);
	}

 }
}