// Informando para o typescript as propriedades do tema
import 'styled-components';
// 📃 Sobrescrevendo definições de tipos n o styled-component
// 📃 Precisa add o arquivo no tsconfig.json
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      white: string,
      grey: string,
      black: string
    },
  }
}
