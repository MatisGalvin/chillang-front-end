# chillang-front-end

## Getting started

### Installation

1. Make sure you have NodeJS installed
2. For npm users, do `npm i`
3. For yarn users, do `yarn`

### Run the project

1. Run the backend
2. For npm users, do `npm run start`
3. For yarn users, do `yarn start`

### Build the project

1. `yarn build` => create a build folder
2. If you don't have serve installed globally do `yarn global add serve` or `npx serve`

### Run the build

At the root of the project, run :
`yarn serve -s build -l 4000`-l option is use to give a specific port, the default port will work as well.

## Convention

### Redux

#### Reducers

export const userSlice = createSlice({ ** Always in camelCase **
name: "user",
initialState, ** Must be initialize with an empty array or empty object **
reducers: { ** leave it empty or for synchrones actions **
},
extraReducers: (builder) => { ** use it for avery asynchrone actions **
builder.addCase(fetchUser.fulfilled, (state, action) => {  
 return action.payload; ** You can do an affectation if you are at a sublevel into the store, exept if you are at the top level. So, we've decided to always use the "return" that can use at any level of the store **
});
},
});

### .env File

React automatically set the NODE_ENV like this :

- `yarn start` => NODE_ENV=development
- `yarn build` => NODE_ENV=production
- `yarn test` => NODE_ENV=test

We add in those scripts `env-cmd -f .env.{NODE_ENV_THAT_YOU_TARGET}`.
It will tell React to look into the right .env file and take a special backend url or a specific user ID...

To add informations inside a .env file :
`REACT_APP_FAVOURITE_COLOR=blue`
`REACT_APP_USER_NAME=Matis`
