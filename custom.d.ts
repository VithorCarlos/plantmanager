/**Para nao exibir erro quando importar qualquer arquivo de imagem. */
declare module '*.png' {
    const content: any;
    export default content;
}