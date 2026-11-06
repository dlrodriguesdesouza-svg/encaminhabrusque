# EncaminhaBrusque · handoff para continuidade no ChatGPT

## 1. Estado exato

- [Repositório](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque) · [branch `feat/hotsite-v1` e HEAD atual](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/commits/feat/hotsite-v1/) · [PR #1 em rascunho](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/pull/1).
- **HEAD de código verificado imediatamente antes deste handoff:** [`8e7fbc34cd0321e1197b7b55b4533e9aa3b3d1dc`](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/commit/8e7fbc34cd0321e1197b7b55b4533e9aa3b3d1dc). O commit deste documento adiciona somente o handoff. A `main` permanecia no commit inicial `340e6c2`; o PR estava aberto, em rascunho e sem merge.
- **Já salvo no GitHub:** hotsite estático em português, mobile-first, de página única. Oito áreas, quatro atalhos principais, quatro secundários, menu por âncoras, alertas urgentes abertos, 16 FAQs, cartões expansíveis, 29 referências, citações clicáveis com retorno de foco e aviso de independência.
- **Arquivos:** `index.html` contém estrutura e conteúdo; `css/styles.css`, estilos responsivos e foco; `js/main.js`, menu e retorno à citação; `assets/`, imagens e ícones locais. Consulte [README](README.md), [status](STATUS_DESENVOLVIMENTO.md), [auditoria pré-publicação](AUDITORIA_PRE_PUBLICACAO.md) e [créditos visuais](CREDITOS_VISUAIS.md).
- **Testes já realizados:** 320, 375, 390, 768 e 1280 px sem rolagem horizontal nas verificações anteriores. Tab, Shift+Tab, Escape, âncoras, foco e os 20 cartões expansíveis foram testados. O Chrome confirmou zoom de 200%. Na correção final, 320 e 390 px e abertura/retorno das referências 2 e 5 por teclado passaram. No Lighthouse mobile 13.0.1 após o refinamento, desempenho 99, acessibilidade 100 e boas práticas 100. SEO 63 com bloqueio de indexação intencional. Esses resultados são históricos e não certificam conformidade WCAG.

## 2. Fontes documentais

- [A · Texto público auditado v0.9](https://docs.google.com/document/d/10QA_gj5-T13v_aCqY32hPg2NwRWn25t8E27KmNp9sSg/edit) — base editorial de 5 de novembro de 2026.
- [B · Especificação técnica e visual](https://docs.google.com/document/d/1P0vcSj3sIyiHueOrkL_-qrXbSEEsNX3tsz6QEiMgtbw/edit) — arquitetura, identidade e experiência mobile.
- [C · Documento-mestre e auditorias históricas](https://docs.google.com/document/d/1w3hO_ydjReITcD4ZuL8S72zuGptIn7UGUwuDlZ5VIeI/edit) — evidências, conflitos e decisões. Priorize as seções finais 41–46 e evite rascunhos substituídos.

O HTML já incorpora alterações posteriores à v0.9, incluindo citações numéricas, ajustes de linguagem, destaques e a correção clínica de redação sobre DIU de emergência. A **versão editorial consolidada v1.0 ainda precisa ser criada e aprovada**. Use a v0.9, o HTML do commit indicado e o registro da auditoria para preparar uma nova versão revisável. Os originais devem ser preservados.

## 3. Revisão clínica

**P0 de redação corrigido. Aprovação clínica profissional pendente.** As duas passagens sobre DIU de cobre distinguem a recomendação da OMS após violência sexual, as contraindicações de inserção diante de cervicite purulenta, gonorreia, clamídia ou doença inflamatória pélvica atuais e a avaliação individual quando há risco de IST sem infecção confirmada. Orientam atendimento urgente para avaliar alternativas sem esperar exames. PEP, acolhimento e atendimento sem boletim de ocorrência foram preservados. Ver [fundamentação](AUDITORIA_PRE_PUBLICACAO.md#fechamento-da-redação-do-p0).

**P1 em aberto:** esclarecer o fluxo local de levonorgestrel entre 72 e 120 horas, consentimento de adolescentes para DIU, retorno e ultrassonografia após DIU e atualização das datas de acompanhamento ou retirada do Implanon. A Anvisa aprovou cinco anos para o Implanon NXT, enquanto o protocolo municipal anterior registra três. Revalidar no lançamento a campanha temporária de HPV. Não foram confirmados estoque, vagas, horários ou unidades específicas para PEP, PrEP e procedimentos. A revisão assistida por IA não substitui validação clínica, editorial e, quando aplicável, jurídica por responsáveis habilitados.

## 4. Referências

**29 fontes, 115 grupos e 194 links numéricos**, preservados na correção final. A lista segue a ordem da primeira citação e os números de cada grupo estão em ordem crescente. Preserve os IDs `ref-1` a `ref-29` e o retorno à citação.

Os PDFs oficiais de [Saúde da Mulher na APS, ref. 4](https://wiki.smsbrusque.sc.gov.br/images/c/cb/Ebook_Saude_da_Mulher_compressed_%281%29.pdf), [DIU de cobre, ref. 5](https://wiki.smsbrusque.sc.gov.br/images/e/ee/DIU_de_Cobre_2026.pdf) e [Implanon assinado, ref. 6](https://wiki.smsbrusque.sc.gov.br/images/0/08/Implanon_DEFINITIVO_E_FINAL_assinado_assinado.pdf) coincidiram com os arquivos auditados. [Índice da Wiki municipal](https://wiki.smsbrusque.sc.gov.br/index.php?title=PROTOCOLOS).

A checagem automatizada mais recente concluiu 27 respostas HTTP 200. O manual de sífilis respondeu 200, mas a transferência excedeu o tempo; a cópia oficial completa já obtida foi consultada. O Planalto excedeu o tempo, com acesso direto ao ECA confirmado em rodada anterior. Preserve os endereços e as datas já registradas. A conferência não declarou conformidade integral com ABNT NBR 6023:2025 ou NBR 10520:2023.

## 5. Design e recursos

A direção visual está aprovada: fundo claro, verde e dourado, ilustração de abertura, atalhos secundários 2 × 2 até 480 px e esquemas educativos originais de DIU e implante. Preserve o cabeçalho, a grade, os alertas, o HTML semântico, os cartões e a navegação. A marca e os grafismos foram desenhados no projeto; a ilustração de abertura foi recriada com geração de imagem a partir do mockup aprovado e entregue em WebP responsivo. Ainda é preciso confirmar autoria e autorização aplicável ao mockup para a marca e a ilustração, além de registrar termos de redistribuição dos recursos originais. Consulte [CREDITOS_VISUAIS.md](CREDITOS_VISUAIS.md).

## 6. Publicação

**Nenhuma publicação foi autorizada.** GitHub Pages foi confirmado desativado. Domínio previsto: `encaminhabrusque.com.br`. Esta etapa não configurou DNS, domínio, HTTPS ou QR Code definitivo. A verificação TXT foi tratada separadamente pelo responsável; o estado no Registro.br não foi confirmado aqui. Preserve `noindex, nofollow` e o PR em rascunho. Não faça merge nem configure hospedagem sem autorização expressa.

## 7. Próximas tarefas, em ordem

1. **Bloqueadores de lançamento:** obter aprovação clínica/editorial da correção e dos pontos P1, concluir a v1.0 consolidada e resolver os direitos dos elementos visuais. A publicação exige autorização expressa.
2. **Validações:** confirmar com a rede os fluxos locais que se pretenda mencionar; revalidar a campanha de HPV e links essenciais na data de lançamento; testar aparelho físico e leitor de tela dedicado, com atenção a urgência, teclado, citações e cartões.
3. **Somente após aprovação:** decidir sobre merge e GitHub Pages, revisar a diretiva de indexação, configurar DNS/domínio/HTTPS, testar redirecionamentos e só depois gerar e validar o QR Code definitivo.

## 8. Continuidade sem Work

1. Na nova conversa, compartilhe o link permanente deste arquivo. Com GitHub conectado, abra o repositório e selecione explicitamente `feat/hotsite-v1`. Confira o HEAD e o PR #1. Use a branch para ler arquivos e preparar commits pequenos e revisáveis, quando autorizados. Se a integração estiver em modo leitura, peça um patch ou instruções para aplicar localmente.
2. Com Google Drive conectado, abra os três links acima usando uma conta autorizada. Consulte os documentos sem alterar os originais. Para a v1.0, prepare uma cópia ou minuta separada para aprovação.
3. Para testar, clone ou baixe a branch. Na raiz do repositório, execute `python3 -m http.server 8000 --bind 127.0.0.1` e abra [a prévia local](http://127.0.0.1:8000/). O site dispensa instalação de dependências. Navegador é necessário para layout, zoom, foco, expansões e Lighthouse. Aparelho físico e leitor de tela dedicado são necessários para as validações ainda pendentes. Se a conversa não tiver execução ou navegador, faça a conferência documental e deixe os testes práticos para execução local.
