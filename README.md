# chillang-front-end

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
