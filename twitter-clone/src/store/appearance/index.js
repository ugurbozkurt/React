import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor:{ 
    name: 'default', 
    color: '#FFF',
    hvColor : '#e7e7e8', 
    fontColor: '#0f1419',
    sectionColor:'#f7f9f9' 
  },
  colors:{
    primary :'#1d9bf0',
  },
 
  colorsArray :[
    '#1d9bf0',
    '#ffd400',
    '#f91880',
    '#7856ff',
    '#ff7a00',
    '#00ba7c'
  ],
  fontSize : 15
};

const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    _setColor: (state, action) => {
      state.colors = action.payload;
    }
    ,
    _setFontSize: (state, action) => {
      state.fontSize = action.payload;
    }
  },
});

export const { _setBackgroundColor, _setColor,_setFontSize } = appearance.actions;

export default appearance.reducer;
