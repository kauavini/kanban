import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    primaryColor: "#7C3AED",
    secondaryColor: "#855ccb",
    bgTag: "#E2D6FF",
    bgColor: "#FBFAFF",
    titleColor: "#403937",
    textColor: "#756966",
    textWhite: "#FFF",
    textGray: "#C7C7CD",
  }

}


export default function Theme({children}:{children: React.ReactNode}){

  return(
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}