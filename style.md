# Style
This file should give some context to people (and llms) into the style desisions this project makes!

## Colors
Colors are defined in the root layout, use the variables: 
```css
    :global(:root) {
        font-family: 'Geist Variable', sans-serif;
      --background: #f1f1f1;
      --color: #000;
      --accent: #1447e6;
    }
```
If a variable is missing, add it. 

## Fonts
Geist Variable is the font face in use for everything
Prefered thinner variations, 400 is a personal fav but up to 600 is fine. Anything more is kind of cringe. 

## Padding
Prefer rem, increments of 0.25. 
0.25rem is a great default.
