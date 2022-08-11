# Game Process

## Entering words:

- user enters a letter & a square is filled with that letter
- when a user hits delete it deletes the previous letter
- when a user hits enter it submits the word
  - if all squares are not filled with letters then the word is not submitted
  - if that word has already been used in a prev guess then the word is not submitted

## Checking submitted words:

- each letter is checked to see if it matches to the solution
- each letter is assigned a color based on it's inclusion in the solution
  - exact matches (correct position in the solution) are green
  - partial matches (in the solution but not the correct position) are yellow
  - none-matches (not in the solution at all) are grey
- the guess is added the grid with the correct colors
- the current guess moves to the next row
- the keypad letters are updated (colors)

## Ending the game:

- when the guessed word fully matches the solution
  - modal to say 'well done'
- when the user runs out of guesses
  - modal to say 'unlucky'

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
