# EncaminhaBrusque · checkpoint de desenvolvimento
**Data:** 5 de novembro de 2026 · **Base técnica:** `660f366`

## 1. Estado geral do projeto

- **Implementado:** hotsite estático, mobile-first, de página única, com oito áreas, 16 FAQs, 29 referências, navegação por âncoras, expansões nativas e orientação urgente visível. O visual segue o mockup aprovado, com ilustração recriada, e o atalho de testagem usa o novo ícone de prancheta.
- **Em andamento:** revisão de qualidade pré-publicação, conferência bibliográfica e validação editorial e clínica para aprovação.
- **Não iniciado:** ativação do GitHub Pages, configuração de produção do domínio e do HTTPS, lançamento e QR Code definitivo.
- **Progresso por evidência:** implementação funcional completa no escopo do MVP, com 8 de 8 áreas e os componentes previstos presentes. Testes essenciais executados no navegador do Codex, com cobertura complementar parcial. Prontidão para publicação ainda pendente de revisão e autorização expressa. Sem percentual global, pois essas etapas não têm pesos definidos.
- **Dificuldades:** o primeiro visual divergiu da preferência do usuário e foi refeito com base no mockup. O link do ECA não pôde ser confirmado pelo endereço do Planalto. Persistem ressalvas de documentação municipal já registradas na auditoria.

## 2. GitHub

- [Repositório](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque) · [Branch `feat/hotsite-v1`](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/tree/feat/hotsite-v1)
- [Último commit de código, `660f366`](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/commit/660f3669fe523009cfa3307403b0002a8be116a3) · [PR #1 aberto em rascunho](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/pull/1)
- **Arquivos:** `index.html` concentra conteúdo e estrutura. `css/styles.css` define o layout. `js/main.js` controla o fechamento do menu. `assets/` guarda a marca, os grafismos SVG e a ilustração JPEG. `README.md` documenta execução e manutenção.
- O PR apontava para o mesmo commit da branch na conferência, e o hash do HTML local coincidiu com o do arquivo remoto. A `main` segue no commit inicial `340e6c2`. O PR não recebeu merge, o GitHub Pages está desativado e a versão foi executada apenas em prévia local.

## 3. Interface e funcionalidades

“Concluído” indica implementação funcional no MVP. A validação clínica para publicação é uma etapa separada.

| Item | Estado | Evidência no site |
|---|---|---|
| Como acessar pelo SUS | Concluído | UBS de referência, orientação e possíveis encaminhamentos. |
| Compare os métodos contraceptivos | Concluído | Métodos agrupados por categoria, com resumos e detalhes expansíveis onde aplicável. |
| Relação desprotegida | Concluído | PEP, contracepção de emergência, violência sexual e acompanhamento em conteúdo aberto. |
| Testagem para IST | Concluído | HIV, sífilis, hepatites B e C, janela diagnóstica e próximos passos. |
| Direitos e confidencialidade | Concluído | Privacidade, consentimento e orientações para adolescentes. |
| Cuidados após procedimentos | Concluído | Cuidados e sinais de alerta para DIU de cobre e implante. |
| Prevenção além dos testes | Concluído | Preservativos, vacinação, PrEP, PEP e prevenção combinada. |
| Perguntas frequentes | Concluído | 16 perguntas com respostas expansíveis. |
| Cabeçalho e menu | Concluído | Marca, slogan, ilustração, link de salto e menu com acesso às oito áreas e às referências. |
| Quatro atalhos principais | Concluído | Métodos, testagem, relação desprotegida e acesso pelo SUS. Testagem usa o ícone de prancheta. |
| Cartões expansíveis | Concluído | Elementos nativos `details` e `summary` para perguntas e métodos selecionados. |
| Rodapé | Concluído | Aviso do briefing, revisão editorial de 05/11/2026 e retorno ao topo. |
| Referências | Concluído | 29 entradas presentes. A checagem de acesso de uma das URLs segue pendente. |

## 4. Fidelidade aos documentos

- O HTML foi comparado com o texto extraído do Google Docs público v0.9, revisão de 05/11/2026. A comparação confirmou o texto das oito áreas, das 16 perguntas com respostas e das 29 referências, além das 26 URLs presentes no documento.
- O aviso inicial e a seção de urgência usam a redação da fonte. Permanecem visíveis os trechos sobre avaliação rápida, início da PEP em até 72 horas quando indicada, tratamento por 28 dias na seção detalhada, prazos da contracepção de emergência e atendimento após violência sexual.
- A comparação não identificou omissão, resumo ou reescrita clínica. As adaptações foram de apresentação, incluindo a organização dos títulos, descrições de navegação, expansão de detalhes e a substituição da formulação institucional do rodapé pela frase exata do briefing. A orientação subsequente do rodapé foi preservada.
- Foram mantidas as ressalvas da v0.9 sobre Implanon NXT (cinco anos aprovados pela Anvisa frente aos três registrados no protocolo municipal), consentimento de adolescentes, retorno e ultrassonografia após DIU e fluxos locais de atendimento. A checagem de fidelidade editorial não é validação clínica independente.

## 5. Qualidade técnica

| Verificação | Resultado observado |
|---|---|
| Responsividade | **Aprovado nos cenários testados.** Prévia em 320, 375, 390, 768 e 1280 px, sem rolagem horizontal. Na medição mais recente, o atalho urgente terminou entre 623 e 776 px do topo. As áreas, FAQs e referências permaneceram presentes. |
| Âncoras e navegação | **Aprovado.** Todos os destinos internos existem. Testes de interação cobriram menu, atalhos principais e complementares, salto ao conteúdo, urgência e retorno ao topo. |
| Expansões e teclado | **Aprovado nos controles testados.** Abertura e fechamento de FAQ por Espaço, método por clique, seleção por Enter, Escape no menu e foco na seção de destino. A inspeção de navegação por teclado foi amostral. |
| Contraste e legibilidade | **Parcial.** Inspeção visual mobile e desktop e cálculos pontuais em pares da versão inicial. O fundo mais claro do grafismo antigo ficou abaixo de 4,5:1 e foi ajustado naquela versão. O redesign usa outra paleta. Auditoria sistemática da paleta atual, zoom de 200% e leitor de tela dedicado estão **não verificados**. |
| Links externos | **Parcial.** As 26 URLs coincidem com o Docs. 25 retornaram HTTP 200 na rodada de checagem. O link do ECA no Planalto excedeu o tempo e a consulta automatizada foi bloqueada. Três referências municipais são entradas bibliográficas sem URL na fonte. |
| JavaScript | **Aprovado nos fluxos testados.** O console ficou sem erros nos testes de menu, âncoras e cartões. |
| Performance | **Parcial.** Os arquivos usados pela página somam cerca de 178 kB em disco, sem bibliotecas externas. Esse valor não é uma medição de transferência ou desempenho. Lighthouse, rede móvel simulada e testes em aparelhos físicos estão **não verificados**. |

## 6. Prévia visual

Capturas reais do checkpoint, com o ícone atualizado, acompanham o relatório na conversa. Mobile em **390 × 844 px** e desktop em **1280 × 900 px**.

Para abrir a versão fora do ambiente desta conversa, baixe ou clone a branch de desenvolvimento e rode `python3 -m http.server 8000 --bind 127.0.0.1` na raiz do repositório. Abra [a prévia local](http://127.0.0.1:8000/). No computador usado para desenvolvimento, a sessão do Codex serviu a página em [127.0.0.1:8765](http://127.0.0.1:8765/). Ambas são prévias locais, sem GitHub Pages.

## 7. Pendências e próximos passos

| Prioridade | Problema | Ação e arquivo |
|---|---|---|
| **P0** | Nenhum defeito crítico identificado nos cenários testados. | Tratar como P0 qualquer diferença clínica substantiva ou falha que oculte orientação urgente encontrada na revisão de `index.html`. |
| **P1** | Aprovação editorial e clínica pendente. | Validar com os responsáveis prazos, contraindicações, urgência, adolescentes, cuidados e ressalvas municipais. Conferir com a v0.9 e o documento-mestre, em `index.html`. |
| **P1** | URL do ECA sem confirmação de acesso. | Verificar o endereço do Planalto em acesso convencional e registrar o resultado. Se necessário, submeter um endereço oficial alternativo à revisão editorial de `index.html`. |
| **P1** | Cobertura complementar de acessibilidade e dispositivos incompleta. | Verificar contraste da paleta atual, zoom de 200%, leitor de tela, foco e alvos de toque em pelo menos um aparelho real. Ajustar `css/styles.css` e `index.html` se houver falha. |
| **P1, após aprovação** | Publicação e infraestrutura de produção pendentes. | Somente após autorização expressa, revisar indexação, configurar Pages, domínio, DNS e HTTPS, verificar redirecionamentos e gerar e testar o QR Code. O fluxo está em `README.md`. |
| **P2** | Sem medição de desempenho em rede móvel. | Executar Lighthouse mobile se disponível e usar o resultado para decidir se `assets/pessoas.jpg` ou outros recursos precisam de refinamento. |

## 8. Orientação para uma revisão independente

1. Use o commit `660f366` como base. Compare o `index.html` com o Docs público v0.9. Priorize PEP, contracepção de emergência, violência sexual, direitos, cuidados após DIU e implante, eficácia e citações.
2. Consulte a especificação técnica e o mockup aprovado para avaliar o cabeçalho e a primeira tela mobile. Use as seções 41 a 46 do documento-mestre para investigar divergências e confira se o texto incorpora a 29ª referência.
3. Abra a prévia em 320 e 390 px e em desktop. Confira aviso urgente, menu, âncoras, foco, expansões, referências e leitura em zoom. Revise `css/styles.css` para contraste e responsividade e `js/main.js` para o comportamento do menu.
4. Registre achados com seção, trecho, fonte e prioridade. Separe divergência documental, problema de implementação e pendência clínica. Evite alterar a redação clínica até a revisão responsável.

## 9. Resumo executivo

- MVP implementado, funcional e salvo em uma branch com PR em rascunho.
- Oito áreas, 16 FAQs e 29 referências conferidas com a v0.9.
- Testes essenciais de navegação e responsividade executados. Nenhum problema crítico identificado nos cenários testados.
- Faltam a revisão editorial e clínica, a confirmação do link do ECA e a cobertura complementar de acessibilidade.
- Próxima prioridade: fechar essas verificações e levar a versão à aprovação, mantendo o site em prévia local.

## 10. Verificações posteriores ao checkpoint · 5 de novembro de 2026

- **Zoom e teclado.** O Chrome confirmou zoom nativo de 200%. Nessa ampliação, foi possível navegar até as perguntas frequentes, focar a primeira pergunta com Tab e abrir a resposta para leitura. No navegador do Codex, foram verificados Tab e Shift+Tab, foco visível, Escape no menu e os 20 controles de expansão por Enter ou Espaço. A árvore de acessibilidade confirmou os estados aberto e fechado e a exposição condicional do conteúdo no cartão de DIU.
- **Integridade.** O HTML foi reconferido com a v0.9. O navegador confirmou oito áreas, 16 FAQs, 29 referências e âncoras internas sem destinos ausentes. O conteúdo clínico foi preservado.
- **ECA.** O endereço original do Planalto abriu a Lei nº 8.069/1990 em navegação direta. A referência foi preservada.
- **Lighthouse mobile 13.0.1.** Desempenho 99 → 100, acessibilidade 100 → 100 e boas práticas 100 → 100. SEO 63 nas duas rodadas por causa da diretiva de bloqueio de indexação mantida para a revisão. A ilustração passou a usar dois tamanhos WebP e, na auditoria mobile, o arquivo baixado caiu de 99.695 para 16.558 bytes. O apontamento de entrega da imagem deixou de aparecer.
- **Capturas integrais.** A versão otimizada foi capturada a 390 × 33.079 px e 1280 × 18.962 px com os cartões recolhidos. As capturas foram entregues na conversa.
- **Pendências.** Permanecem a revisão editorial e clínica e a validação complementar com leitor de tela dedicado e dispositivos físicos. O Lighthouse apontou oportunidades relacionadas a cache e folha de estilos na prévia. A configuração de cache e compressão deve ser medida no ambiente de produção após autorização. O README registra a revisão de `noindex, nofollow` antes do lançamento.
