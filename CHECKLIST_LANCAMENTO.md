# EncaminhaBrusque — checklist de pré-publicação e lançamento

**Preparado em:** 5 de novembro de 2026  
**Status:** candidato à publicação; **NÃO publicado** e sem autorização de lançamento.  
**Repositório:** https://github.com/dlrodriguesdesouza-svg/encaminhabrusque  
**Branch de trabalho:** `feat/hotsite-v1` · [PR #1](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/pull/1) (rascunho).  
**Domínio pretendido:** `encaminhabrusque.com.br`.  
**Texto público v1.0 (candidato):** https://docs.google.com/document/d/1OQJp_Yp4nFqUQM-chrmc8f8c8WSMAkbsZTc1XyI69yo/edit  
**Auditoria clínica/editorial:** [AUDITORIA_PRE_PUBLICACAO.md](AUDITORIA_PRE_PUBLICACAO.md) e [HANDOFF_CHATGPT.md](HANDOFF_CHATGPT.md).

> Este documento organiza decisões e testes. A revisão assistida por IA não equivale a aprovação clínica, jurídica, de acessibilidade ou de direitos autorais. Não presumir que verificações pendentes passaram.

## A. Pendências de aprovação e segurança antes de divulgar (bloqueadores / aceite explícito)

- [ ] **Aprovação editorial do responsável:** confirmar a redação v1.0, o aviso de independência e o escopo educativo; registrar data e versão aprovadas.
- [ ] **Segurança clínica:** providenciar, quando possível, revisão por profissional habilitado das orientações urgentes, contracepção de emergência, PEP, DIU, Implanon, testagem e direitos. Enquanto não houver revisão, documentar a limitação e **não apresentar o site como clinicamente certificado**. O lançamento público exige decisão consciente do responsável acerca desse risco residual.
- [x] **Conflito de redação sobre DIU após violência sexual:** a comunicação pública agora orienta procura imediata e avaliação individualizada da contracepção de emergência, sem afirmar consenso entre diretrizes. Implementada nas duas passagens do `index.html` e da v1.0 (commit `9e41cef`). Divergências entre OMS e Ministério da Saúde permanecem registradas para eventual revisão futura.
- [ ] **Fluxos municipais não confirmados:** preservar as ressalvas existentes e não garantir oferta/estoque/unidade/horário/consentimento específico sem comprovação. Pontos a revisar se houver confirmação: levonorgestrel entre 72–120 horas; Implanon (Anvisa 5 anos vs. protocolo municipal 3 anos); consentimento de adolescentes para DIU; retornos e ultrassonografia após DIU.
- [ ] **Integridade de fontes:** verificar versão, URLs e formatação ABNT das 29 referências. Nas orientações de DIU após violência sexual, guardar no relatório de auditoria a distinção entre OMS e documentos brasileiros e assegurar que a chamada numérica sustenta a afirmação efetivamente publicada.
- [ ] **Prazo do HPV:** confirmar situação da campanha para 15–19 anos no dia do lançamento (redação da v1.0 cita 31/12/2026); atualizar se houver mudança ou após o término.
- [ ] **Direitos visuais:** comprovar procedência e autorização aplicável ao mockup que orientou a marca e a ilustração das quatro pessoas; registrar em `CREDITOS_VISUAIS.md`. SVGs originais não precisam necessariamente de licença aberta para serem usados no próprio site: definir apenas a política de reutilização por terceiros, se desejada.
- [ ] **Autorização explícita de publicação pelo responsável** após leitura dos riscos e das pendências. A existência de um PR não equivale a autorização.

## B. Testes práticos antes da aprovação (não substituídos pelo Lighthouse)

- [ ] **Celular físico** (preferencialmente iOS e Android; ao menos o dispositivo disponível): abrir prévia local ou homologação autorizada; inspecionar 320–390 px, fontes legíveis, rolagem, imagens e ausência de corte.
- [ ] **Fluxo urgente:** em celular, da página inicial à seção de exposição recente e PEP, medir se o caminho é fácil; verificar que a orientação de procurar atendimento não está escondida.
- [ ] **Navegação:** quatro atalhos principais, quatro secundários, menu, âncoras, retorno ao topo; testar voltar do navegador.
- [ ] **Interações:** abrir e fechar os cartões de métodos e as 16 FAQs; confirmar foco visível e toque sem erros.
- [ ] **Citações:** testar números sobrescritos, destino das 29 fontes, retorno à passagem original; testar leitura ampliada.
- [ ] **Tecnologia assistiva:** VoiceOver (iPhone/Mac) ou TalkBack (Android), explorando títulos, menu, FAQ, avisos, alt-text, números de referências e retorno; registrar barreiras encontradas.
- [ ] **Zoom/texto ampliado:** repetir percurso essencial com 200% e, se disponível, tamanho de fonte aumentado no telefone.
- [ ] **Rede e links:** garantir que páginas de referência oficiais mais importantes abram no telefone; registrar links instáveis sem removê-los automaticamente.
- [x] **Testes automatizados históricos no Work:** 320/375/390/768/1280 px sem rolagem horizontal, navegação por teclado e Lighthouse mobile 99/100/100 na rodada informada. Não representam ensaio físico nem conformidade integral WCAG.

## C. Pré-implantação técnica — apenas depois do aceite

- [ ] Revisar diffs do [PR #1](https://github.com/dlrodriguesdesouza-svg/encaminhabrusque/pull/1), confirmar que nenhum material interno, credencial, arquivo desnecessário ou dado sensível será publicado.
- [ ] Verificar `index.html`, `css/styles.css`, `js/main.js`, `assets/` e caminhos **relativos**; executar servidor local `python3 -m http.server 8000 --bind 127.0.0.1`.
- [ ] Conferir a data do conteúdo, o texto de rodapé, as 8 áreas, as 16 FAQs, as 29 referências e as chamadas numéricas.
- [ ] Confirmar que o domínio pertence ao responsável e que a verificação de domínio do GitHub foi concluída (TXT é verificação de titularidade, **não** configuração de publicação). Não salvar o token TXT de verificação neste repositório.
- [ ] Definir se deseja apenas o domínio raiz ou também `www.encaminhabrusque.com.br`; optar por um endereço canônico.
- [ ] Decidir a ordem de merge/implantação com a conta proprietária. **Não selecionar uma branch como fonte do Pages sem intenção de tornar o site público**: publicar via Pages disponibiliza o conteúdo publicamente.
- [ ] Preparar a remoção de `<meta name="robots" content="noindex, nofollow">` para **o momento da divulgação**, se desejar indexação. O bloqueio de robôs não torna um site privado.

## D. Publicação controlada — SOMENTE com autorização expressa

1. [ ] Revisar e aprovar PR #1; integrar na `main` (após aceite e testes).
2. [ ] Em **Settings → Pages**, selecionar **Deploy from a branch**, `main` e pasta `/(root)` (site estático sem build); salvar. Isso ativa publicação.
3. [ ] Em **Settings → Pages → Custom domain**, definir `encaminhabrusque.com.br`, salvar e confirmar domínio/certificado (o GitHub pode criar `CNAME` ao salvar).
4. [ ] No **Registro.br**, ajustar DNS somente conforme instruções vigentes do GitHub Pages e da zona DNS efetivamente hospedada. Para domínio raiz, o GitHub documenta A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (ou ALIAS/ANAME onde suportado). Se usar `www`, CNAME aponta para `dlrodriguesdesouza-svg.github.io`. Evitar wildcard; verificar registros anteriores para não afetar outros serviços.
5. [ ] Aguardar propagação e verificar DNS, endereço HTTP/HTTPS e **Enforce HTTPS** quando o certificado estiver disponível; validar raiz e `www` conforme a escolha do endereço canônico.
6. [ ] Reavaliar/remover `noindex, nofollow` somente após aceite de indexação, já com deploy preparado, e confirmar que a atualização entrou em produção.
7. [ ] Abrir as seções, avisos de urgência, referências e imagens no endereço de produção usando um celular real; monitorar erros, cache e redirecionamentos.
8. [ ] Só **depois** do endereço estável e HTTPS funcional, gerar um QR Code definitivo e testar impressão/escaneamento; indicar data da revisão do conteúdo.

**Referências técnicas oficiais:**
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## E. Após lançamento

- [ ] Guardar registro de data, commit publicado, domínio canônico, validações e responsável pela decisão de publicar.
- [ ] Definir periodicidade de revisão clínica/editorial, fontes oficiais e alertas para normas, vacinas, prazos e serviços locais; destacar data de revisão no rodapé.
- [ ] Estabelecer contato para correção de informação desatualizada e procedimento de retirada/rollback (reverter commit ou desativar Pages, se necessário).
- [ ] Manter a independência institucional explícita; não anunciar parceria com Secretaria de Saúde antes de formalização.

## F. Situação confirmada no momento da criação deste arquivo

- Branch `feat/hotsite-v1`, PR #1 em **draft**, sem merge.
- Última mudança de texto: commit `9e41cef` (duas passagens sobre violência sexual).
- `index.html` ainda contém `noindex, nofollow`, sem `CNAME` configurado no código examinado.
- Hospedagem Pages e estado atual dos DNS **não foram verificáveis com a permissão de leitura disponível nesta rodada**; não inferir que estão ativos.
- Documento público v1.0 já foi atualizado para a mesma redação: https://docs.google.com/document/d/1OQJp_Yp4nFqUQM-chrmc8f8c8WSMAkbsZTc1XyI69yo/edit.
