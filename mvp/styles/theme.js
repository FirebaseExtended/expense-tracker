/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 import { createTheme } from '@mui/material/styles';
 import { errorColor, fontColor, fontDefault, fontTitle, primaryColor, secondaryColor, successColor, tertiaryColor } from './_variables.module.scss';
 
 export const theme = createTheme({
   palette: {
     primary: {
       main: primaryColor,
     },
     secondary: {
       main: secondaryColor,
     },
     tertiary: {
       main: tertiaryColor,
     },
     success: {
       main: successColor,
     },
     error: {
       main: errorColor,
     }
   },
   components: {
     MuiButton: {
       styleOverrides: {
         textSecondary: {
           color: fontColor
         }
       }
     },
     MuiIconButton: {
       styleOverrides: {
         root: {
           height: "2em",
           width: "2em"
         }
       }
     },
     MuiInputBase: {
       styleOverrides: {
         input: {
           fontFamily: fontDefault
         }
       }
     },
     MuiInputLabel: {
       styleOverrides: {
         root: {
           fontFamily: fontDefault
         }
       }
     },
     MuiToolbar: {
       styleOverrides: {
         root: {
           '@media (min-width: 600px)': {
             padding: 0
           }
         }
       }
     },
     MuiTypography: {
       styleOverrides: {
         root: {
           fontFamily: fontDefault
         },
         h1: {
           color: fontColor,
           fontSize: "84px",
           fontWeight: "400"
         },
         h2: {
           fontSize: "40px",
           fontWeight: "100",
           opacity: "60%"
         },
         h3: {
           fontFamily: fontTitle,
           fontSize: "24px"
         },
         h4: {
           color: fontColor,
           fontFamily: fontTitle,
           fontSize: "24px",
           fontWeight: "600"
         },
         h5: {
           color: fontColor,
           fontWeight: "200"
         },
         h6: {
           color: fontColor,
           fontWeight: "200",
           fontSize: "14px"
         }
       }
     }
   }
 });