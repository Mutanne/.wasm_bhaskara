# Hello Wasm

Primeiro codigo meu em Webassemby, resolve a fórmula de Bhaskara.

Para executar no navegador deve desabilitar o recurso file_unique_origin pois impede carregamento de arquivos locais, e copie o arquivo out/main.wasm para a pasta src.

Desabilitar recurso no Firefox:
1- Abra o Firefox.
2- Digite about:config na barra de endereço.
3- Aceite os riscos.
4- Procure por privacy.file_unique_origin pela barra de busca.
5- Duplo clique para passar de "true" para "false"

Desabilitar recurso no Chrome:
Então...aqui já complica um bocado.

Não esqueça de reabilitar este recurso depois caso usar o browser no dia a dia.

Para alterar e testar entre no link:https://webassembly.studio/
Selecione "empty wat project", e altere os codigos dos arquivos pelos desse repositório, para rodar clique em "Build and Run".
