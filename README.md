# EncaminhaBrusque

Guia independente de informação sobre contracepção, prevenção e testagem de IST e acesso ao SUS em Brusque (SC). Esta versão está em revisão para aprovação clínica e editorial. O texto público de referência é a v0.9, revisada em 5 de novembro de 2026.

## Executar localmente

Na raiz do repositório, rode `python3 -m http.server 8000 --bind 127.0.0.1` e abra [127.0.0.1:8000](http://127.0.0.1:8000/). O site é estático e dispensa instalação de dependências.

- `index.html` reúne as oito áreas, 16 perguntas frequentes e 29 referências.
- `css/styles.css` define o layout responsivo e os estados dos controles.
- `js/main.js` fecha o menu ao escolher um tema ou pressionar Escape.
- `assets/` contém a marca, os grafismos em SVG e a ilustração do cabeçalho.

## Atualizar e testar

Altere a redação clínica apenas após revisão da fonte editorial vigente. Preserve citações, prazos, ressalvas, alertas visíveis e os identificadores das seções, usados pelas âncoras. Confira os links bibliográficos, a data da revisão e eventuais campanhas com data de término.

Teste menu, atalhos, retorno ao topo e expansão de métodos e perguntas por toque e teclado. Em telas de 320 a 1280 px, verifique o foco visível, a leitura do aviso de urgência e a ausência de rolagem horizontal. Confira as 16 perguntas, 29 referências e o console do navegador.

## Antes de publicar

Conclua a revisão clínica e editorial, confira as referências e valide os pontos municipais em aberto.

Mantenha `<meta name="robots" content="noindex, nofollow">` no `index.html` durante o desenvolvimento e a revisão. Antes da publicação, revise essa diretiva e confirme a regra de indexação desejada para o lançamento.

Após autorização expressa, configure o GitHub Pages para servir a raiz da branch aprovada. Verifique domínio, DNS, HTTPS e redirecionamentos. Gere e teste o QR Code definitivo quando o endereço de produção estiver funcionando.
