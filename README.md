# chillang-front-end

This project was created in order to simplify the translate process.

## Getting started

You just have to clone the repo on your computer.
When you launch the project, React automatically set the NODE_ENV like this :

- `yarn start` => NODE_ENV=development
- `yarn build` => NODE_ENV=production
- `yarn test` => NODE_ENV=test

We add in those scripts `env-cmd -f .env.{NODE_ENV_THAT_YOU_TARGET}`.
It will tell react to look into right .env file and take a special backend url or a specific user ID...

### Installation

First, you need to have Node JS on your computer. If you don't, you need to install it before everything else !
Then, you need to do a `npm install` or `yarn`.
The project use TypeScript. You can add it globally on your engine if you want.
In order to run your build, you will need to install a package named "serve" on your computer.
You just have to execute `yarn global add serve`.

### Launch the project

You need to start the back end project, otherwise, you will not have access to the API and by extension, datas.
Do a `yarn start` and it will set enerything thanks to the .env file (explainations available above).

### Build the project

Do a `yarn build`.
It will create a build project for you. Then, you can launch the build if you want. It's at this moment, you need to have installed the "serve" package on your engine.
Just do `yarn serve -s build -l 4000`. the -l option is to give a specific port, the default port will work as well.

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

#### .env File

In the future, you may be forced to add informations in the .env files.
In order to be seen by React, you have to use a specific syntax. I show you what it's like with an example :
you want to add a favourite color.
So, it will be `REACT_APP_FAVOURITE_COLOR=blue`
you want to add a user name => `REACT_APP_USER_NAME=Matis` and so on...
