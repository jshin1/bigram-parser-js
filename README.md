# Bigram Parser

Command line application that takes in a text file as input to project a histogram of the bigrams and their counts in the file.

### Project Stack

Node.js/JavaScript, Jest

### Running the Application

To run the application, please type the following in the command line:
```
node appRunner.js /path/to/your/txt/file
```
For instance, if you have a text file in the root of the app directory named "sample.txt" that includes the text
```
The quick brown fox and the quick blue hare.
```
you will run the app by typing
```
node appRunner.js sample.txt
```
and that should output in the terminal
```
the quick 2
quick brown 1
brown fox 1
fox and 1
and the 1
quick blue 1
blue hare 1
```

### Testing

If you would like to run the tests for this application, please type the following in the command line:
```
npm test
```

I hope you enjoy!
